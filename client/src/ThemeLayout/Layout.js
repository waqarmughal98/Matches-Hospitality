import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';
import Backdrop from '../Components/Modal/Backdrop';
import { useModal } from '../UseContext/ModalProvider';

const Layout = () => {
    const { openModal } = useModal();
    return (
        <div className='flex'>
            <div className='min-w-24'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className='p-10 relative'>
                    <button onClick={openModal} className="btn-open-modal">
                        Open Modal
                    </button>
                    {<Outlet />}
                    <Backdrop />
                </div>
            </div>
        </div>
    );
};

export default Layout
