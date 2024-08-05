import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';
import Backdrop from '../Components/Modal/Backdrop';
import { useAppContext } from '../UseContext/ContextProvider';
const Layout = () => {
    const { openModal, closeModal, isOpen, setIsOpen , isModalOpen } = useAppContext()
    const handleToggle = () => {
        if (openModal == true || isOpen) {
            closeModal()
            setIsOpen(false)
        }
    }
    return (
        <div className='flex'>
            <div className='min-w-20 z-40 lg:block hidden'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className={`p-12 relative`} onClick={handleToggle}>
                    {<Outlet />}
                    {/* <div className={` ${isModalOpen ? 'block opacity-100' : 'opacity-0 none '} transition-all duration-200 ease-linear`}> */}
                    <Backdrop />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Layout
