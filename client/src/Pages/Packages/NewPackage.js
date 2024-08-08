import React, { useEffect, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import { LabelInput, PrimaryInput } from '../../Components/UiElements/TextInputs';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, URL as API_URL } from '../../utilities/ConstantData';
import { useAppContext } from '../../UseContext/ContextProvider';
const Switch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div className="w-9 h-5 bg-gray-200 rounded-full shadow-inner"></div>
        <div
            className={`absolute left-1 top-1 w-3 h-3 rounded-full transition-transform duration-300 ${checked ? 'transform translate-x-4 bg-primaryGreen' : 'transform translate-x-0 bg-red-800'}`}
        ></div>
    </label>
);

const NewPackage = () => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [loading2, setLoading2] = useState(false)
    const navigate = useNavigate();
    const { action } = useParams();
    const { handleErrors, selectedEditPackage } = useAppContext();
    const [info, setInfo] = useState({
        name: selectedEditPackage.name || '',
        description: selectedEditPackage.description || '',
        price: selectedEditPackage.price || '',
        matchTicket: selectedEditPackage.matchTicket || '',
        externalFlight: selectedEditPackage.externalFlight || '',
        hotelAccommodation: selectedEditPackage.hotelAccommodation || '',
        groundTransportation: selectedEditPackage.groundTransportation || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const createPackage = [
        { title: 'Match Ticket', name: 'matchTicket', id: 1 },
        { title: 'External Flight', name: 'externalFlight', id: 2 },
        { title: 'Hotel Accommodation', name: 'hotelAccommodation', id: 3 },
        { title: 'Ground Transportation', name: 'groundTransportation', id: 4 },
    ];

    const updateSelectedIds = () => {
        createPackage.map((item) => {
            if (selectedEditPackage[item.name] != '') {
                setSelectedIds((pre) => ([...pre, item.id]))
            }
        })
    }

    useEffect(() => {
        if (action == "edit" && Object.keys(selectedEditPackage).length == 0) {
            navigate('/all-packages')
        }
        if (action == "edit") {
            updateSelectedIds()
        }
        else {
            setSelectedIds([])
            clearInfo()
        }
    }, [])

    const clearInfo = () => {
        const clearedInfo = Object.keys(info).reduce((acc, key) => {
            acc[key] = '';
            return acc;
        }, {});
        setInfo(clearedInfo);
    };

    const handleToggle = (id, name) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(existingId => existingId !== id)
                : [...prev, id]
        );
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: selectedIds.includes(id) ? '' : prevInfo[name],
        }));
    };

    const validation = () => {

        if (!info.name) {
            toast.error("Name of package is required.");
            setLoading2(false)
            return false;
        }
        if (!info.description) {
            toast.error("Description of package is select category");
            setLoading2(false)
            return false;
        }
        if (!info.price) {
            toast.error("Price pf package is required");
            setLoading2(false)
            return false;
        }
        return true;
    };

    const handleCreatePackage = () => {
        let isValid = true;
        if (!validation()) {
            return null
        }


        createPackage.forEach(item => {
            if (selectedIds.includes(item.id) && !info[item.name]) {
                isValid = false;
                setLoading2(false)
                toast.error(`${item.title} details must be provided if the switch is on.`);
            }
        });

        if (isValid) {
            apiCall();
        }
    };

    const apiCall = async () => {
        setLoading2(true)
        if (action == "create") {
            axiosInstance().post(`${API_URL}/package/create`, info)
                .then(() => {
                    handleResponse("crated")
                })
                .catch((error) => {
                    handleCatch(error)
                });
        }
        else {
            axiosInstance().put(`${API_URL}/package/edit/${selectedEditPackage._id}`, info)
                .then(() => {
                    handleResponse("updated")
                })
                .catch((error) => {
                    handleCatch(error)
                });
        }
    };

    const handleResponse = (word) => {
        setLoading2(false);
        toast.success(`Package ${word} successfully`);
        navigate("/all-packages");
    }

    const handleCatch = (error) => {
        console.log(error, "error")
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
        <div className='grid grid-cols-12 rounded-lg justify-center gap-y-10 min-h-[600px] overflow-y-auto min-w-[800px] px-1'>
            {/* {action && (
                <div className='col-span-12 headerText'>
                    {action == "create" ? "" : <SecondaryButton />}
                </div>
            )} */}
            <div className='col-span-12'>
                <SecondaryButton/>
            </div>
            <div className='col-span-12 headerText'>
                {action == "create" ? "Create Package" : "Edit Package"}
            </div>
            <div className='col-span-6'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput name="name" value={info.name} onChange={handleChange} label='Package Name' />
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grdi-cols-12 gap-y-3'>
                            <div className='col-span-12'>
                                <label htmlFor="description" className="primaryText">Package Description</label>
                            </div>
                            <div className='col-span-12'>
                                <textarea
                                    value={info.description}
                                    rows="6"
                                    className="block p-2.5 text-white w-full text-sm bg-transparent rounded-lg border border-borderInput focus:outline-none focus:border-primaryGreen"
                                    placeholder="Description..."
                                    onChange={handleChange}
                                    name='description'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 text-white'>
                        <div className='grid grid-cols-12'>
                            {createPackage.map((item) => {
                                const isChecked = selectedIds.includes(item.id);
                                return (
                                    <div key={item.id} className={`grid col-span-12 border-t  border-[#5C5C5C] transition-all duration-150 ease-linear ${isChecked ? 'h-52' : 'h-16'}`}>
                                        <div className='flex flex-col pt-5 gap-y-5'>
                                            <div className='flex justify-between'>
                                                <h1 className='primaryText'>
                                                    {item.title}
                                                </h1>
                                                <div className='flex items-center'>
                                                    <Switch
                                                        checked={isChecked}
                                                        onChange={() => handleToggle(item.id, item.name)}
                                                    />
                                                    <label className='ml-2'>{isChecked ? 'Yes' : 'No'}</label>
                                                </div>
                                            </div>
                                            {isChecked && (
                                                <textarea
                                                    className='w-full p-2 border rounded bg-transparent border-borderInput focus:outline-none focus:border-primaryGreen'
                                                    placeholder='Enter details here...'
                                                    rows={4}
                                                    name={item.name}
                                                    value={info[item.name]}
                                                    onChange={handleChange}
                                                ></textarea>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='col-span-12 border p-5 border-[#5C5C5C] rounded-xl'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <PrimaryInput prefix={"$"} field="number" placeholder='Price' name="price" value={info.price} onChange={handleChange} className='text-lg' />
                                        <div className='flex flex-col gap-y-2'>
                                            <svg onClick={() => setInfo(prevInfo => ({ ...prevInfo, price: (Number(prevInfo.price) + 1).toString() }))} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="15.6" height="15.6" rx="5" fill="#88F67E" />
                                                <path d="M10.1999 7.32443V8.11236H5.3999V7.32443H10.1999ZM8.2472 5.3999V10.1999H7.35742V5.3999H8.2472Z" fill="black" />
                                            </svg>
                                            <svg onClick={() => setInfo(prevInfo => ({ ...prevInfo, price: (Number(prevInfo.price) - 1).toString() }))} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.400391" width="15.6" height="15.6" rx="5" fill="#88F67E" />
                                                <path d="M9.43126 7.60059V8.66934H6V7.60059H9.43126Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    {
                                        action == "create"
                                            ?
                                            <PrimaryButton size='medium' color='green' onClick={handleCreatePackage}>{loading2 ? "Creating package..." : "Create Package"}</PrimaryButton>
                                            :
                                            <PrimaryButton size='medium' color='green' onClick={handleCreatePackage}>{loading2 ? "Updating package..." : "Update Package"}</PrimaryButton>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPackage;
