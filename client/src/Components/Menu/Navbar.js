import React from 'react'
import { ProfileDropdown } from '../UiElements/Dropdowns'

const Navbar = () => {
    return (
        <nav className={`bg-primaryBlack border-gray-200 px-16 sticky top-0 !z-30`}>
            <div className="flex flex-wrap items-center justify-between py-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/images/svgs/navbar/match-logo.svg" alt="match Logo" width='120' />
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="18.5" cy="7.5" r="3.25" fill="#F14B51" stroke="#0D0D0D" stroke-width="0.5" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 6L12 13L2 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 2.60987C20.3292 2.09888 19.7228 1.69352 19.0554 1.41696C18.3879 1.14039 17.6725 0.998047 16.95 0.998047C16.2275 0.998047 15.5121 1.14039 14.8446 1.41696C14.1772 1.69352 13.5708 2.09888 13.06 2.60987L12 3.66987L10.94 2.60987C9.9083 1.57818 8.50903 0.998582 7.05 0.998582C5.59096 0.998582 4.19169 1.57818 3.16 2.60987C2.1283 3.64156 1.54871 5.04084 1.54871 6.49987C1.54871 7.95891 2.1283 9.35818 3.16 10.3899L4.22 11.4499L12 19.2299L19.78 11.4499L20.84 10.3899C21.351 9.87912 21.7563 9.27269 22.0329 8.60523C22.3095 7.93777 22.4518 7.22236 22.4518 6.49987C22.4518 5.77738 22.3095 5.06198 22.0329 4.39452C21.7563 3.72706 21.351 3.12063 20.84 2.60987V2.60987Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
