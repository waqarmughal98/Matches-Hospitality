import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Menu/Sidebar';
import Navbar from '../Components/Menu/Navbar';

const Layout = () => {
    return (
        <div className='flex'>
            <div className='min-w-24'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className='p-10'>
                    {<Outlet />}
                </div>
            </div>
        </div>
    );
};

export default Layout
