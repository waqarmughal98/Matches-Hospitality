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
                        Edit Match
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
                                            <DatePicker selected={startDate} className='w-full bg-transparent border py-3 rounded-lg text-white px-2 border-borderInput focus:outline-primaryGreen focus:outline-none focus:border-0' onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <LabelInput label='Venu' />
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
