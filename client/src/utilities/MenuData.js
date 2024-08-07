
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
    { path: 'all-users', label: 'Users', iconPath: <FiUsers /> },
    { path: 'all-teams', label: 'Teams', iconPath: <PiMicrosoftTeamsLogo /> },
    { path: 'all-matches', label: 'Matches', iconPath: <MdOutlineStadium /> },
];

const userSidebarItems = [
    { path: 'user-dashboard', label: 'Dashboard', iconPath: <IoHomeOutline /> }
];


export { adminSidebarItems, userSidebarItems };





