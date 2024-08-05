import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { CiStar } from 'react-icons/ci'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiProfileLine } from 'react-icons/ri'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import profile from '../../../src/assets/images/userdashboard/event1.jpg'

export const AdminProfile = () => {
    return (
        <div className='grid grid-cols-12 gap-y-5 font-roboto'>
            <div className='col-span-12 min-h-72  rounded-lg grid'>
                <div className='flex flex-col relative'>
                    <div className='flex-1 bg-primaryGreen/80 rounded-t-md'></div>
                    <div className='flex-1 bg-black/60 rounded-b-md'></div>
                    <div className='absolute h-full w-full flex items-center px-5 text-white gap-5'>
                        <div className='h-40 w-40 rounded-full relative'>
                            <img src={profile} className='absolute h-full w-full rounded-full' />
                            <BiEdit className='absolute bottom-8 right-0 text-xl' />
                        </div>
                        <div className='flex flex-col gap-2 pt-24'>
                            <div className='headerText'>Codiepi Limited</div>
                            <div className=''>Admin</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12 text-white'>
                <div className='grid grid-cols-12 space-x-5'>
                    <div className='col-span-3 card rounded-lg'>
                        <div className='flex flex-col'>
                            <label className='Info border-b border-borderInput px-7 py-5 headerText'>Info</label>
                            <div className='flex flex-col gap-y-7 p-7'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <CgProfile className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Name</label>
                                            <p className='text-sm'>Ali Hamza</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <MdOutlineMailOutline className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Email</label>
                                            <p className='text-sm'>codiepi@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <CiStar className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Role</label>
                                            <p className='text-sm'>Admin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-9 card rounded-lg p-7'>
                        <div className='grid grid-cols-12 gap-y-5'>
                            <div className='col-span-12'>
                                <div className='flex'>
                                    <LabelInput label='Full Name' value='Admin' readOnly/>
                                </div>
                            </div>
                            <div className='col-span-12'>
                                <div className='flex gap-x-5'>
                                    <LabelInput label='New Password' />
                                    <LabelInput label='Confirm Password' />
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <LabelInput label='Old Password' />
                            </div>
                            <div className='grid col-span-12 justify-end'>
                                <PrimaryButton size='medium'>Set Password</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
