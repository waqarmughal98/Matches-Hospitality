import React from 'react'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
const AllCategories = () => {
    const data = [
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ];
    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12 text-white'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-3xl'>All Packages</h1>
                    <PrimaryButton size='medium'>
                        Create Category
                    </PrimaryButton>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-5'>
                    {data.map((item, index) => (
                        <div key={index} className='group relative xl:col-span-4 md:col-span-12 col-span-12 min-h-56 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]' style={{ backgroundImage: `url(${item.banner})` }}>
                            <div className='flex items-end h-full p-5 text-white'>
                                <div className='flex flex-col gap-y-5'>
                                    <img src={item.logo} alt='logo' width={40} />
                                    <div>
                                        <p className='font-semibold text-lg'>{item.title}</p>
                                        <p className='w-2/4 text-sm'>{item.desc}</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:-top-48 transition-opacity duration-100 ease-linear'>
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:-top-48 transition-opacity duration-100 ease-linear'>
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0  bg-gradient-to-b from-transparent to-primaryGreen/40 opacity-0 hover:opacity-30 transition-opacity duration-100 ease-linear "></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCategories
