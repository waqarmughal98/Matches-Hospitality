import React, { useState } from 'react';
import { SecondaryButton } from '../../Components/UiElements/Buttons';
import Dropdown from '../../Components/UiElements/Dropdowns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const CreateMatch = () => {
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
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-y-10'>
                    <div className='col-span-12 headerText'>
                        Create Match
                    </div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-12'>
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
                            <div className='col-span-2 text-white/80 items-center grid justify-center text-2xl'>
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
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6'>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className='col-span-6'></div>
                            <div className='col-span-12'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMatch;
