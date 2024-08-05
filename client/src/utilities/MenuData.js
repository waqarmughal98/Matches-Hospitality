
import React from "react";
import { IoHomeOutline } from 'react-icons/io5';
import { TbCategory } from "react-icons/tb";
import { LuPackage2 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { MdOutlineStadium } from "react-icons/md";



const adminSidebarItems = [
    { path: 'dashboard', label: 'Dashboard', iconPath: <IoHomeOutline /> },
    { path: 'all-categories', label: 'Categories', iconPath: <TbCategory /> },
    { path: 'all-packages', label: 'Packages', iconPath: <LuPackage2 /> },
    { path: 'user-management', label: 'Users', iconPath: <FiUsers /> },
    { path: 'all-teams', label: 'Teams', iconPath: <PiMicrosoftTeamsLogo /> },
    { path: 'all-matches', label: 'Matches', iconPath: <MdOutlineStadium /> },
];

const userSidebarItems = [
    { path: 'dashboard', label: 'Dashboard', iconPath: 'M4 12l8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5' },
    { path: 'profile', label: 'Profile', iconPath: 'M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5' },
];


export { adminSidebarItems, userSidebarItems };





