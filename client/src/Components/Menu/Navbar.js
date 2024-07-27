import React from 'react'
import ProfileDropdown from '../UiElements/Dropdowns'

const Navbar = () => {
    return (
            <nav className={`bg-primaryBlack border-gray-200 px-16 sticky top-0`}>
                <div className=" flex flex-wrap items-center justify-between py-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="assets/images/svgs/navbar/match-logo.svg" alt="match Logo" width='120' />
                    </a>
                    <div className="flex lg:order-1">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden lg:block w-[35rem]">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm border border-[#2E3539] rounded-full bg-transparent text-white focus:outline outline-primaryGreen" placeholder="Search Matches, Players, Stats ..." />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-2" id="navbar-search">
                        <div className="lg:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm border border-gray-300 rounded-lg text-white focus:outline outline-primaryGreen" placeholder="Search Matches, Players, Stats ..." />
                        </div>
                        <div className='flex gap-5'>
                            <div className='text-white self-center grid grid-cols-3 gap-7 mr-3'>
                                <img src='assets/images/svgs/navbar/bell.svg' className='inline' alt='mail' width='20' />
                                <img src='assets/images/svgs/navbar/mail.svg' className='inline' alt='bell' width='20' />
                                <img src='assets/images/svgs/navbar/heart.svg' className='inline' alt='heart' width='20' />
                            </div>
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </nav>

    )
}

export default Navbar
