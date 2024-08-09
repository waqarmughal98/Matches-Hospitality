import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import Dropdown from '../../Components/UiElements/Dropdowns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LabelInput } from '../../Components/UiElements/TextInputs';

const items = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
];

const itemsImages = [
    { id: '1', name: 'Item 1', imageUrl: '/assets/images/Category/event-logo2.png' },
    { id: '2', name: 'Item 2', imageUrl: '/assets/images/Category/event-logo2.png' },
    { id: '3', name: 'Item 3', imageUrl: '/assets/images/Category/event-logo2.png' },
];

const EditMatch = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedItems, setSelectedItems] = useState({
        dropdown1: undefined,
        dropdown2: undefined,
        dropdown3: undefined,
    });

    const handleSelect = (dropdownId, id) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [dropdownId]: id,
        }));
    };

    return (
        <div className='grid grid-cols-12 gap-y-10 backdrop-blur-xl bg-black/30 p-10'>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-y-10 justify-center'>
                    <div className='col-span-6 col-start-4 headerText'>
                        Edit Match Details
                    </div>
                    <div className='col-span-6 col-start-4'>
                        <div className='grid grid-cols-12 gap-y-5'>
                            <div className='col-span-11'>
                                <Dropdown
                                    id="dropdown1"
                                    title="Choose an item"
                                    data={items}
                                    position="bottom-left"
                                    hasImage={false}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems.dropdown1}
                                    onSelect={(id) => handleSelect("dropdown1", id)}
                                    label='Team Category'
                                />
                            </div>
                            <div className='col-span-5'>
                                <Dropdown
                                    id="dropdown2"
                                    title="Choose an item"
                                    data={itemsImages}
                                    position="bottom-left"
                                    hasImage={true}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems.dropdown2}
                                    onSelect={(id) => handleSelect("dropdown2", id)}
                                />
                            </div>
                            <div className='col-span-1 text-white/80 items-center grid justify-center text-2xl'>
                                vs
                            </div>
                            <div className='col-span-5'>
                                <Dropdown
                                    id="dropdown3"
                                    title="Choose an item"
                                    data={itemsImages}
                                    position="bottom-left"
                                    hasImage={true}
                                    style="custom-dropdown-style"
                                    selectedId={selectedItems.dropdown3}
                                    onSelect={(id) => handleSelect("dropdown3", id)}
                                />
                            </div>
                            <div className='col-span-11'>
                                <div className='grid grid-cols-12 gap-x-5'>
                                    <div className='col-span-6'>
                                        <div className='flex flex-col gap-y-3'>
                                            <label className='inputLabel'>Date and Time</label>
                                            <div class="relative max-w-sm">
                                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </div>
                                                <input datepicker id="default-datepicker" type="text" class="bg-transparent border border-borderInput text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" selected={startDate} />
                                            </div>
                                            <DatePicker selected={startDate} className='w-full bg-transparent border py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0' onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>  
                                    <div className='col-span-6'>
                                        <LabelInput label='Venue' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-11 mt-5'>
                                <PrimaryButton size='large'>Update</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditMatch;
