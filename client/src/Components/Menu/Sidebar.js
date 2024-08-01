import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const location = useLocation()

    const currentPath = location.pathname

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`flex flex-col ${isCollapsed ? 'w-40' : 'w-20'} bg-primaryBlack min-h-screen transition-all duration-200 ease-linear sticky top-0`}>
            <div className={`flex items-center h-[4.8rem] z-50 bg-primaryBlack ${isCollapsed ? 'justify-end pr-8' : 'justify-center'}`}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleCollapse} className='cursor-pointer'>
                    <g clipPath="url(#clip0_191_3503)">
                        <path d="M27.125 8.74996L0.875046 8.74996C0.392027 8.74996 6.85448e-05 8.35793 6.85026e-05 7.87498C6.84604e-05 7.39196 0.392099 7 0.875045 7L27.125 7C27.608 7 28 7.39203 28 7.87498C28 8.35792 27.608 8.74995 27.125 8.74996Z" fill="white" />
                        <path d="M0.875045 14.0474L27.125 14.0474C27.608 14.0474 28 14.4394 28 14.9223C28 15.4053 27.608 15.7973 27.125 15.7973L0.875046 15.7973C0.392027 15.7973 6.85448e-05 15.4053 6.85026e-05 14.9223C6.84604e-05 14.4394 0.392027 14.0474 0.875045 14.0474Z" fill="white" />
                        <path d="M0.875039 21.0947L18.375 21.0947C18.858 21.0947 19.25 21.4868 19.25 21.9697C19.25 22.4527 18.858 22.8447 18.375 22.8447L0.875039 22.8447C0.392021 22.8447 6.23013e-05 22.4527 6.2259e-05 21.9697C-1.02624e-05 21.4867 0.39202 21.0947 0.875039 21.0947Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_191_3503">
                            <rect width="28" height="28" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 28 0)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col">
                <nav className="flex-1 py-4 bg-primaryBlack flex flex-col gap-5">
                    <Link
                        to="dashboard"
                        className={`flex items-center gap-3 py-2 text-gray-100 ${currentPath === '/dashboard' ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='ms-5' stroke='white' width="30px" height="30px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" /></svg>
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Dashboard
                            </p>
                        )}
                    </Link>
                    <Link
                        to="package"
                        className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === '/package' ? 'border-l-2 border-primaryGreen' : ''}`}
                    >
                        <img src='assets/images/svgs/navbar/home.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear  overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Packages
                            </p>
                        )}
                    </Link>
                    <Link
                        to="user-management"
                        className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === '/user-management' ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                    >
                        <img src='assets/images/svgs/navbar/stadium.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Matches
                            </p>
                        )}
                    </Link>
                    <Link
                        to="all-categories"
                        className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === '/all-categories' ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                    >
                        <img src='assets/images/svgs/navbar/stadium.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Categories
                            </p>
                        )}
                    </Link>
                    <Link
                        to="all-teams"
                        className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === '/all-teams' ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                    >
                        <img src='assets/images/svgs/navbar/stadium.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Teams
                            </p>
                        )}
                    </Link>
                    <Link
                        to="all-matches"
                        className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === '/all-matches' ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                    >
                        <img src='assets/images/svgs/navbar/stadium.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Matches
                            </p>
                        )}
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
