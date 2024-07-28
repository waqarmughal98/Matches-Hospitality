import React from 'react'
import { SecondaryButton } from '../../Components/UiElements/Buttons'

const Account = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-12'>
            <SecondaryButton/>
        </div>
        <div className='col-span-12 text-white'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    Your Account
                </div>
                <div className='col-span-12'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6 border-b border-[#E8E8E8]'>
                            <div className='flex py-5 gap-5 items-center'>
                                <img src='assets/images/svgs/navbar/profile.png' className='h-16 w-16 rounded-full'/>
                                <div className='flex flex-col'>
                                    <p className='text-white'>Profile Photo</p>
                                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
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
