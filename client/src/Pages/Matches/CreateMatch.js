import React, { useEffect, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import Dropdown from '../../Components/UiElements/Dropdowns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { axiosInstance, URL } from '../../utilities/ConstantData';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useAppContext } from '../../UseContext/ContextProvider';


const itemsImages = [
    { id: '1', name: 'Item 1', imageUrl: '/assets/images/Category/event-logo2.png' },
    { id: '2', name: 'Item 2', imageUrl: '/assets/images/Category/event-logo2.png' },
    { id: '3', name: 'Item 3', imageUrl: '/assets/images/Category/event-logo2.png' },
];

const CreateMatch = () => {
    const [selectedItems, setSelectedItems] = useState({
        dropdown1: null,
        dropdown2: null,
        dropdown3: null,
    });
    const navigate = useNavigate()
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [venue, setVenue] = useState('');
    const { handeErrors ,categoryData, PackageData } = useAppContext()

    const handleSelect = (dropdownId, id) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [dropdownId]: id,
        }));
    };

    useEffect(() => {
        //for reload
        if(PackageData.length==0){
            navigate("/all-matches") 
        }
        const packageIds = PackageData.map(pkg => pkg._id);
        setSelectedPackages(packageIds);
    }, []);


    const handlePackageToggle = (packageId) => {
        setSelectedPackages((prevSelectedPackages) => 
            prevSelectedPackages.includes(packageId)
                ? prevSelectedPackages.filter(id => id !== packageId)
                : [...prevSelectedPackages, packageId]
        );
    };

    console.log(selectedItems,"selected items")
    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleTimeChange = (time) => {
        setTime(time);
    };

    const handleVenueChange = (e) => {
        setVenue(e.target.value);
    };

    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-y-10'>
                    <div className='col-span-12 headerText'>
                        Create Match
                    </div>
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='grid grid-cols-12 gap-y-5'>
                            <div className='sm:col-span-11 col-span-12'>
                                <Dropdown
                                    id="dropdown1"
                                    title="Choose an item"
                                    data={categoryData}
                                    position="bottom-left"
                                    hasImage={false}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems}
                                    onSelect={(id) => handleSelect("dropdown1",id)}
                                    label='Team Category'
                                />
                            </div>
                            <div className='md:col-span-5 col-span-12'>
                                <Dropdown
                                    id="dropdown2"
                                    title="Choose an item"
                                    data={itemsImages}
                                    position="bottom-left"
                                    hasImage={true}
                                    style="custom-dropdown-style"
                                    disabled={true}
                                    selectedId={selectedItems.dropdown2}
                                    onSelect={(id) => handleSelect("dropdown2", id)}
                                />
                            </div>
                            <div className='md:col-span-1 col-span-12 text-white/80 items-center grid justify-center text-2xl'>
                                vs
                            </div>
                            <div className='md:col-span-5 col-span-12'>
                                <Dropdown
                                    id="dropdown3"
                                    title="Choose an item"
                                    data={itemsImages}
                                    position="bottom-left"
                                    hasImage={true}
                                    disabled={true}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems.dropdown3}
                                    onSelect={(id) => handleSelect("dropdown3", id)}
                                />
                            </div>
                            <div className='sm:col-span-11 col-span-12'>
                                <div className='grid grid-cols-12 sm:gap-x-5 gap-y-5'>
                                    <div className='lg:col-span-6 col-span-12'>
                                        <div className='flex flex-col gap-y-3'>
                                            <label className='inputLabel'>Date</label>
                                            <DatePicker 
                                                selected={date} 
                                                className='w-full bg-transparent border py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0' 
                                                onChange={handleDateChange} 
                                                dateFormat="MM/dd/yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className='lg:col-span-6 col-span-12'>
                                        <div className='flex flex-col gap-y-3'>
                                            <label className='inputLabel'>Time</label>
                                            <DatePicker
                                                selected={time}
                                                className='w-full bg-transparent border py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0'
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
                                                            <div className="relative w-9 h-5 py-2 bg-gray-200 peer-focus:outline-none  rounded-full after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen af rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-11 mt-5'>
                                <PrimaryButton size='large'>Create Match</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMatch;
