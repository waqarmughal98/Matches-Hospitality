import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { adminSidebarItems, userSidebarItems } from '../../utilities/MenuData';


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [sidebarItems, setSidebarItems] = useState([]);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const userType = userData?.userType;
        if (userType === 'ap%4k45a5sd') {
            setSidebarItems(adminSidebarItems);
        } else {
            setSidebarItems(userSidebarItems);
        }
    }, []);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`flex flex-col ${isCollapsed ? 'w-40' : 'w-20'} bg-primaryBlack min-h-screen transition-all  duration-300 ease-linear sticky top-0`}>
            <div className={`flex items-center h-[4.8rem] z-50 bg-primaryBlack ${isCollapsed ? 'justify-end pr-8' : 'justify-center'}`}>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleCollapse}
                    className='cursor-pointer'
                >
                    <g clipPath="url(#clip0_191_3503)">
                        <path d="M27.125 8.74996L0.875046 8.74996C0.392027 8.74996 6.85448e-05 8.35793 6.85026e-05 7.87498C6.84604e-05 7.39196 0.392099 7 0.875045 7L27.125 7C27.608 7 28 7.39203 28 7.87498C28 8.35792 27.608 8.74995 27.125 8.74996Z" fill="white" />
                        <path d="M0.875045 14.0474L27.125 14.0474C27.608 14.0474 28 14.4394 28 14.9223C28 15.4053 27.608 15.7973 27.125 15.7973L0.875046 15.7973C0.392027 15.7973 6.85448e-05 15.4053 6.85026e-05 14.9223C6.84604e-05 14.4394 0.392027 14.0474 0.875045 14.0474Z" fill="white" />
                        <path
                            d={isCollapsed
                                ? "M0.875 21.0947H27.125C27.608 21.0947 28 21.4867 28 21.9697C28 22.4527 27.608 22.8447 27.125 22.8447H0.875C0.392 22.8447 0 22.4527 0 21.9697C0 21.4867 0.392 21.0947 0.875 21.0947Z"
                                : "M0.875 21.0947L18.375 21.0947C18.858 21.0947 19.25 21.4868 19.25 21.9697C19.25 22.4527 18.858 22.8447 18.375 22.8447L0.875 22.8447C0.392 22.8447 0 22.4527 0 21.9697C0 21.4867 0.392 21.0947 0.875 21.0947Z"
                            }
                            fill="white"
                        />
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
                    {sidebarItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 py-2 mt-2 text-gray-100 ${currentPath === `/${item.path}` ? 'border-l-2 border-primaryGreen rounded-r-3xl' : ''}`}
                        >
                            {/* <svg className="text-white ms-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                            </svg> */}
                            <div className='ms-5 text-2xl'>
                                {item.iconPath}
                            </div>

                            {isCollapsed && (
                                <p className={`transition-opacity duration-1000 ease-in-out overflow-hidden opacity-0 ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                    {item.label}
                                </p>
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
