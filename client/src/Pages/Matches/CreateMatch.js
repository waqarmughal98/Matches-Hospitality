import React, { useEffect, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import Dropdown from '../../Components/UiElements/Dropdowns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, URL as API_URL } from '../../utilities/ConstantData';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useAppContext } from '../../UseContext/ContextProvider';

const CreateMatch = () => {
    const [selectedItems, setSelectedItems] = useState({
        dropdown1: null,
        dropdown2: null,
        dropdown3: null,
    });
    const navigate = useNavigate();
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [venue, setVenue] = useState('');
    const [TeamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const { handleErrors, categoryData, PackageData, selectedEditMatch } = useAppContext();

    const handleSelect = (dropdownId, id) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [dropdownId]: id,
        }));
    };

    const { action } = useParams();

    useEffect(() => {
        // for reload
        if (selectedEditMatch.length === 0 || PackageData.length==0) {
            navigate("/all-matches");
        }
        if (action === "create") {
            const packageIds = PackageData.map(pkg => pkg._id);
            setSelectedPackages(packageIds);
        }
    }, []);

    useEffect(() => {
        if (selectedEditMatch && action === "edit") {
            setDate(new Date(selectedEditMatch.date));
            setTime(new Date(selectedEditMatch.time));
            setVenue(selectedEditMatch.venue);
            setSelectedPackages(selectedEditMatch.packages);
            setSelectedItems({
                dropdown1: selectedEditMatch.category,
                dropdown2: selectedEditMatch.team1,
                dropdown3: selectedEditMatch.team2,
            });
        }
    }, [selectedEditMatch, action]);

    useEffect(() => {
        if (selectedItems.dropdown1) {
            if (action === "create") {
                setSelectedItems((prev) => ({
                    ...prev,
                    dropdown2: null,
                    dropdown3: null,
                }));
            }
            fetchTeams(selectedItems.dropdown1._id);
        }
    }, [selectedItems.dropdown1]);

    const fetchTeams = async (id) => {
        axiosInstance().get(`${API_URL}/team/filter-by-category/${id}`)
            .then((res) => {
                const data = res.data.data;
                setTeamData(data);
                setLoading(false);
            })
            .catch((error) => {
                const errors = error?.response?.data?.errors;
                const statusCode = error?.response?.status;
                if (statusCode === 401) {
                    toast.error(errors);
                    try {
                        localStorage.removeItem('userData')
                      } catch (error) {
                        console.log(error)
                      } finally {
                        navigate("/Login")
                      }
                } else {
                    handleErrors(error);
                }
            });
    };

    const handlePackageToggle = (packageId) => {
        setSelectedPackages((prevSelectedPackages) =>
            prevSelectedPackages.includes(packageId)
                ? prevSelectedPackages.filter(id => id !== packageId)
                : [...prevSelectedPackages, packageId]
        );
    };

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleTimeChange = (time) => {
        setTime(time);
    };

    const handleVenueChange = (e) => {
        setVenue(e.target.value);
    };

    const validation = () => {
        if (!selectedItems.dropdown1) {
            toast.error("Please select a team category.");
            return false;
        }
        if (!selectedItems.dropdown2) {
            toast.error("Please select the first team.");
            return false;
        }
        if (!selectedItems.dropdown3) {
            toast.error("Please select the second team.");
            return false;
        }
        if (!date) {
            toast.error("Please select a date.");
            return false;
        }
        if (!time) {
            toast.error("Please select a time.");
            return false;
        }
        if (!venue) {
            toast.error("Please enter the venue.");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validation()) {
            apiCall();
        }
    };

    const apiCall = async () => {
        setLoading2(true);
        const data = {
            category: selectedItems?.dropdown1?._id,
            team1: selectedItems?.dropdown2?._id,
            team2: selectedItems?.dropdown3?._id,
            date,
            time,
            venue,
            packages: selectedPackages,
        };
        if(action=="create"){
            axiosInstance().post(`${API_URL}/event/create`, data)
            .then((res) => {
                handleResponse("crated")
            })
            .catch((error) => {
                handleCatch(error)
            });
        }
        else{
            axiosInstance().put(`${API_URL}/event/edit/${selectedEditMatch._id}`, data)
            .then((res) => {
                handleResponse("updated")
            })
            .catch((error) => {
                handleCatch(error)
            });
        }
    };

    const handleResponse = (word) =>{
        setLoading2(false);
        toast.success(`Match ${word} successfully`);
        navigate("/all-matches");
    }

    const handleCatch=(error)=>{
        console.log(error,"error")
        setLoading2(false);
        const errors = error?.response?.data?.errors;
        const statusCode = error?.response?.status;
        if (statusCode === 401) {
            toast.error(errors);
              try {
                localStorage.removeItem('userData')
              } catch (error) {
                console.log(error)
              } finally {
                navigate("/Login")
              }
        } else {
            handleErrors(error);
        }
    }


    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-y-10'>
                    <div className='col-span-12 headerText'>
                        {action === "create" ? "Create New Match" : "Edit Match Details"}
                    </div>
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='grid grid-cols-12 gap-y-5'>
                            <div className='sm:col-span-11 col-span-12'>
                                <Dropdown
                                    id="dropdown1"
                                    title="Select category"
                                    data={categoryData}
                                    position="bottom-left"
                                    hasImage={true}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems?.dropdown1?._id?.toString()}
                                    onSelect={(id) => handleSelect("dropdown1", id)}
                                    label='Team Category'
                                />
                            </div>
                            <div className='md:col-span-5 col-span-12'>
                                <Dropdown
                                    id="dropdown2"
                                    title="Select team 1"
                                    data={TeamData}
                                    position="bottom-left"
                                    hasImage={true}
                                    style="custom-dropdown-style"
                                    disabled={loading}
                                    selectedId={selectedItems?.dropdown2?._id?.toString()}
                                    onSelect={(id) => handleSelect("dropdown2", id)}
                                />
                            </div>
                            <div className='md:col-span-1 col-span-12 text-white/80 items-center grid justify-center text-2xl'>
                                vs
                            </div>
                            <div className='md:col-span-5 col-span-12'>
                                <Dropdown
                                    id="dropdown3"
                                    title="Select team 2"
                                    data={TeamData}
                                    position="bottom-left"
                                    hasImage={true}
                                    disabled={loading}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems?.dropdown3?._id?.toString()}
                                    onSelect={(id) => handleSelect("dropdown3", id)}
                                />
                            </div>
                            <div className='sm:col-span-11 col-span-12'>
                                <div className='grid grid-cols-12 sm:gap-x-5 gap-y-5'>
                                    <div className='lg:col-span-6 col-span-12'>
                                        <div className='flex flex-col gap-y-3'>
                                            <label className='inputLabel text-white'>Date</label>
                                            <DatePicker
                                                selected={date}
                                                className='w-full bg-transparent border font-manrope py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0'
                                                onChange={handleDateChange}
                                                dateFormat="MM-dd-yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className='lg:col-span-6 col-span-12'>
                                        <div className='flex flex-col gap-y-3'>
                                            <label className='inputLabel text-white'>Time</label>
                                            <DatePicker
                                                selected={time}
                                                className='w-full bg-transparent border font-manrope py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0'
                                                onChange={handleTimeChange}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <LabelInput label='Venue' value={venue} onChange={handleVenueChange} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-11 mt-5'>
                                <div className='grid grid-cols-12 gap-y-5'>
                                    <div className='col-span-12 headerText'>
                                        Available Packages
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='grid grid-cols-12 gap-y-5'>
                                            {PackageData.map((item, index) => (
                                                <div key={index} className='col-span-12 border-borderInput border-b py-3'>
                                                    <div className='flex justify-between'>
                                                        <h1 className='text-lg text-white'>{item.name}</h1>
                                                        <label className="inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                value={item.name}
                                                                className="sr-only peer"
                                                                checked={selectedPackages.includes(item._id)}
                                                                onChange={() => handlePackageToggle(item._id)}
                                                            />
                                                            <div className="relative w-9 h-5 py-2 bg-gray-200 peer-focus:outline-none rounded-full after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-11 mt-5'>
                                {action === 'create' ? (
                                    <PrimaryButton onClick={()=>handleSubmit()} size='large'>
                                        {loading2 ? "Creating match..." : "Create Match"}
                                    </PrimaryButton>
                                ) : (
                                    <PrimaryButton onClick={()=>handleSubmit()} size='large'>
                                        {loading2 ? "Updating match..." : "Update Match"}
                                    </PrimaryButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMatch;
