import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';
import Backdrop from '../Components/Modal/Backdrop';
import { useAppContext } from '../UseContext/ContextProvider';
const Layout = () => {
    // const { openModal, closeModal, isOpen, setIsOpen, isModalOpen } = useAppContext()
    // const handleToggle = () => {
    //     if (openModal == true || isOpen) {
    //         closeModal()
    //         setIsOpen(false)
    //     }
    // }
    return (
        <div className='flex'>
            <div className='min-w-20 z-40 lg:block hidden'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className={`p-12 relative`}>
                    <Outlet />
                    <Backdrop />
                </div>
            </div>
        </div>
    );
};

export default Layout
