import React from 'react'

const Revenue = () => {
    const items = Array.from({ length: 5 }, (_, index) => index);
    const userData = [
        {
            title: 'Total Revenue',
            revenue: '$40,689.00'
        },
        {
            title: 'Revenue Last Week',
            revenue: '$20,589.00'
        }
    ]
    return (
        <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-5'>
                {userData.map((item, index) => {
                    return (
                        <>
                            <div className='xl:col-span-3 md:col-span-6 col-span-12 rounded-2xl bg-primaryBlack border-primaryBorder border-[1px] p-5'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12'>
                                        <div className='flex flex-col gap-2'>
                                            <span className='text-base font-semibold'>{item.title}</span>
                                            <span className='text-4xl font-bold pb-2'>{item.revenue}</span>
                                            <div className='flex gap-2'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                                                </svg>
                                                <span className='text-[#00B69B]'>8.5%</span>
                                                <span>
                                                    Up from yesterday
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className='lg:col-span-6 md:col-span-12 col-span-12 border-xl bg-white text-black rounded-2xl p-5'>
                    <div className='grid grid-cols-12 h-full items-center lg:gap-0 gap-5'>
                        <div className='lg:col-span-3 col-span-12'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col'>
                                    <span className='text-sm font-semibold'>Installment Plan</span>
                                    <h1 className='text-4xl font-bold'>$320.00</h1>
                                </div>
                                <span className='text-[#00B69B] text-sm font-semibold'>Charge in 3 days</span>
                            </div>
                        </div>
                        <div className='grid lg:col-span-9 col-span-12 justify-center rounded-lg bg-[#F7F6F6] p-5'>
                            <div className='grid grid-cols-10 sm:gap-x-5 gap-y-5'>
                                {items.map((item, index) => (
                                    <div key={index} className='md:col-span-2 col-span-3'>
                                        <div className='flex flex-col gap-5'>
                                            <div
                                                className={`h-3 w-full ${index === items.length - 1 ? 'bg-gray-400' : 'bg-primaryBlack'}`}
                                            ></div>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-[#646464] text-xs'>Feb 24</span>
                                                <h1 className='text-base font-semibold'>$320.00</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue
