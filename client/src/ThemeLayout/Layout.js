import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';
import Backdrop from '../Components/Modal/Backdrop';
import { useAppContext } from '../UseContext/ContextProvider';
const Layout = () => {
    const { isModalOpen } = useAppContext()
    return (
        <div className='flex'>
            <div className='min-w-20 z-40 lg:block hidden'>
                <Sidebar />
            </div>
            <div className='w-full flex flex-col'>
                <Navbar />
                <div className={`p-12 relative`}>
                    <Outlet />
                    <div className={`${isModalOpen ? 'opacity-100 ' : 'opacity-0'} transition-opacity duration-150 ease-linear`}>
                        <Backdrop />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout
