import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';
import Backdrop from '../Components/Modal/Backdrop';
import { useAppContext } from '../UseContext/ContextProvider';
const Layout = () => {
    const { openModal, closeModal, isOpen, setIsOpen  } = useAppContext()
    const handleToggle = () => {
        if (openModal == true || isOpen) {
            closeModal()
            setIsOpen(false)
        }
    }
    return (
        <div className='flex'>
            <div className='min-w-20 z-40'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className={`p-10 relative bg-[#1D1D1D] ${openModal && 'cursor-pointer'}`} onClick={handleToggle}>
                    {<Outlet />}
                    <Backdrop />
                </div>
            </div>
        </div>
    );
};

export default Layout
