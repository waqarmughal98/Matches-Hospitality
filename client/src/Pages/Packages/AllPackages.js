import React, { useState } from 'react';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
const AllPackages = () => {

    const packagesData = [
        {
            name: 'Gold Package',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        },
        {
            name: 'Silver Package',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
        },
    ];
    return (
        <div className='grid grid-cols-12 text-white gap-10 font-roboto'>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-8 text-4xl font-semibold'>
                                All Packages
                            </div>
                            <div className='grid col-span-4 justify-end'>
                                <PrimaryButton size='medium' className='font-semibold'>
                                    Create New Package
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 font-jumper'>
                        <div className='grid grid-cols-12 lg:gap-x-8 gap-y-8'>
                            <div className='col-span-12'>
                                <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5'>
                                    <div className='grid lg:col-span-5 col-span-12 bg-white text-primaryBlack rounded-2xl p-6 min-h-[19rem]'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-col lg:gap-x-8 gap-y-8'>
                                                <div className='flex flex-col gap-3'>
                                                    <h1 className='text-3xl font-bold'>
                                                        Platinum Package
                                                    </h1>
                                                    <p className='text-sm w-11/12'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                                <div className='flex-1 flex justify-between items-center'>
                                                    <PrimaryButton size='medium'>View Details</PrimaryButton>
                                                    <div className='flex justify-end gap-x-4'>
                                                        <div className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                            <MdOutlineEdit />
                                                        </div>
                                                        <div className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                            <RiDeleteBinLine />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:col-span-7 col-span-12'>
                                        <div className='grid grid-cols-12 gap-5'>
                                            {packagesData.map((item, index) => {
                                                return (
                                                    <div key={index} className='grid lg:col-span-6 col-span-12 bg-[#161616] rounded-2xl p-6 min-h-[19rem] items-center'>
                                                        <div className='flex flex-col gap-5'>
                                                            <h1 className='text-3xl font-bold'>
                                                                {item.name}
                                                            </h1>
                                                            <p className='text-[#464646] text-sm'>
                                                                {item.desc}
                                                            </p>
                                                            <div className='flex justify-between items-center'>
                                                                <PrimaryButton size='medium' color='black'>
                                                                    View Details
                                                                </PrimaryButton>
                                                                <div className='flex justify-end gap-x-4'>
                                                                    <div className='bg-primaryBlack h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                                        <MdOutlineEdit />
                                                                    </div>
                                                                    <div className='bg-primaryBlack h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                                        <RiDeleteBinLine />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPackages;
