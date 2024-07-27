import React from 'react'
import { PrimaryButton } from '../UiElements/Buttons'

const Packages = () => {
    const packagesData = [
        {
            name: 'Gold Package',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. "
        },
        {
            name: 'Silver Package',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. "
        }
    ]
    return (
        <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-12 text-3xl font-semibold'>Packages</div>
                <div className='col-span-12'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='grid lg:col-span-5 col-span-12 bg-white text-primaryBlack rounded-2xl p-6 min-h-[19rem]'>
                            <div className='flex flex-col'>
                                <PrimaryButton size='small' className='self-end'>Popular</PrimaryButton>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-3xl font-bold'>
                                            Platinum Package
                                        </h1>
                                        <p className='text-sm w-11/12'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <PrimaryButton size='medium'>View Details</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-7 col-span-12 '>
                            <div className='grid grid-cols-12 gap-5'>
                                {packagesData.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className='grid lg:col-span-6 col-span-12 bg-[#161616] rounded-2xl p-6 min-h-[19rem] items-center'>
                                                <div className='flex flex-col gap-5'>
                                                    <h1 className='text-3xl font-bold'>
                                                        {item.name}
                                                    </h1>
                                                    <p className='text-[#464646] text-sm'>
                                                        {item.desc}
                                                    </p>
                                                    <div>
                                                        <PrimaryButton size='medium' color='black'>
                                                            View Details
                                                        </PrimaryButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
