import React from 'react'
import { SecondaryButton } from '../../Components/UiElements/Buttons'

const Account = () => {
    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <SecondaryButton />
            </div>
            <div className='col-span-12 text-white'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='col-span-12 font-semibold text-3xl'>
                        Your Account
                    </div>
                    <div className='xl:col-span-6 md:col-span-8 col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 border-b border-[#E8E8E8]'>
                                <div className='flex py-5 gap-5 items-center flex-wrap'>
                                    <img src='assets/images/svgs/navbar/profile.png' className='h-16 w-16 rounded-full' />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-lg'>Profile Photo</p>
                                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 border-b border-[#E8E8E8]'>
                                <div className='flex flex-col py-5'>
                                    <p className='text-lg'>Name</p>
                                    <p className='text-sm'>Lorem Ipsum. </p>
                                </div>
                            </div>
                            <div className='col-span-12 border-b border-[#E8E8E8]'>
                                <div className='flex flex-col py-5'>
                                    <p className='text-lg'>Email</p>
                                    <p className='text-sm'>Lorem@gmail.com </p>
                                </div>
                            </div>
                            <div className='col-span-12 border-b border-[#E8E8E8]'>
                                <div className='flex flex-col pt-5'>
                                    <p className='text-xl font-semibold'>Accessibility</p>
                                    <div className='flex flex-col py-4'>
                                        <p className='text-lg'>Email</p>
                                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col py-5'>
                                        <p className='text-lg'>Lorem Ipsum sit dolor</p>
                                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                    <label class="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" />
                                        <div class="relative rounded-full w-10 h-5 py-2 bg-[#353637] peer-focus:outline-none  rounded-ful after:bg-[#E10000] peer-checked:after:translate-x-full peer-checked:after:bg-primaryGreen af rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                        {/* <span class="ms-2 text-xs text-[#4D4D4D] peer-checked:text-primaryGreen">Active</span> */}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
