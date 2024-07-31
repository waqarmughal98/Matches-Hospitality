import React from 'react'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import { useAppContext } from '../../UseContext/ContextProvider';
import { useNavigate } from 'react-router-dom';
const AllCategories = () => {
    const { showBackdropWithContent } = useAppContext()
    const navigate = useNavigate()

    const CreateCategory =()=>{
        navigate('/create-category')
    }
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

    const handleShowBackdrop = () => {
        const content = (
            <div className='flex-1'>
                <div class="relative p-4 text-center rounded-lg shadow backdrop-blur-3xl bg-black/40 sm:p-5">
                    <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                    <div class="flex justify-center items-center space-x-4">
                        <button data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, cancel
                        </button>
                        <button type="submit" class="py-2 px-3 text-sm font-medium text-center text-black bg-primaryGreen rounded-lg">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        )
        showBackdropWithContent(content)
    }
    return (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12 text-white'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-3xl'>All Packages</h1>
                    <PrimaryButton size='medium' onClick={CreateCategory}>
                        Create Category
                    </PrimaryButton>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-5'>
                    {data.map((item, index) => (
                        <div key={index} className='group relative xl:col-span-4 md:col-span-12 col-span-12 min-h-56 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]' style={{ backgroundImage: `url(${item.banner})` }}>
                            <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent to-primaryGreen/40 opacity-0 group-hover:opacity-30 transition-opacity duration-100 ease-linear h-full w-full"></div>
                            <div className='flex items-end absolute h-full w-full p-5 text-white group'>
                                <div className='flex flex-col gap-y-5 group'>
                                    <img src={item.logo} alt='logo' width={40} />
                                    <div>
                                        <p className='font-semibold text-lg'>{item.title}</p>
                                        <p className='w-3/4 text-sm'>{item.desc}</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center group'>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear' onClick={handleShowBackdrop}>
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear'>
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCategories
