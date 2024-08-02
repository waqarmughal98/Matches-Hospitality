import React, { useState } from 'react';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import { useAppContext } from '../../UseContext/ContextProvider';
import { LabelInput } from '../../Components/UiElements/TextInputs';

const Switch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div className="w-9 h-5 bg-gray-200 rounded-full shadow-inner"></div>
        <div
            className={`absolute left-1 top-1 w-3 h-3  rounded-full transition-transform duration-300 ${checked ? 'transform translate-x-4 bg-primaryGreen' : 'transform translate-x-0 bg-red-800'}`}
        ></div>
    </label>
);
const NewPackage = () => {
    const [expandedId, setExpandedId] = useState(null);
    const handleToggle = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const createPackage = [
        { title: 'Match Ticket', id: 1 },
        { title: 'External Flight', id: 2 },
        { title: 'Hotel Accommodation', id: 3 },
        { title: 'Ground Transportation', id: 4 },
    ];
    return (
        <div className='grid grid-cols-12 rounded-lg justify-center gap-y-10 min-h-[600px] overflow-y-auto min-w-[800px]'>
            <div className='col-span-12 headerText'>
                Create Match
            </div>
            <div className='col-span-6'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12'>
                        <LabelInput label='Package Name' />
                    </div>
                    <div className='col-span-12'>
                        <LabelInput label='Package Description' />
                    </div>
                    <div className='col-span-12 text-white'>
                        <div className='grid grid-cols-12'>
                            {createPackage.map((item) => {
                                return (
                                    <div key={item.id} className={`grid col-span-12 border-t font-roboto border-[#5C5C5C] transition-all duration-150 ease-linear ${expandedId === item.id ? 'h-52' : 'h-16'}`}>
                                        <div className='flex flex-col pt-5 gap-y-5'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-xl'>
                                                    {item.title}
                                                </h1>
                                                <div className='flex items-center'>
                                                    <Switch
                                                        checked={expandedId === item.id}
                                                        onChange={() => handleToggle(item.id)}
                                                    />
                                                    <label className='ml-2'>{expandedId == item.id ? 'Yes' : 'No'}</label>
                                                </div>
                                            </div>
                                            {expandedId === item.id && (
                                                <textarea
                                                    className='w-full p-2 border rounded bg-transparent'
                                                    placeholder='Enter details here...'
                                                    rows={4}
                                                ></textarea>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='col-span-12 border p-5 border-[#5C5C5C] rounded-xl font-roboto'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <h1 className='text-4xl'>
                                            $15000.00
                                        </h1>
                                        <div className='flex flex-col gap-y-2'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="15.6" height="15.6" rx="5" fill="#88F67E" />
                                                <path d="M10.1999 7.32443V8.11236H5.3999V7.32443H10.1999ZM8.2472 5.3999V10.1999H7.35742V5.3999H8.2472Z" fill="black" />
                                            </svg>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.400391" width="15.6" height="15.6" rx="5" fill="#88F67E" />
                                                <path d="M9.43126 7.60059V8.66934H6V7.60059H9.43126Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    <PrimaryButton size='medium' color='green'>Create Package</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPackage
