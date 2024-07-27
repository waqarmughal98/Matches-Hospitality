import React, { useState } from 'react'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div class={`hidden md:flex flex-col ${isCollapsed ? 'w-40' : 'w-24'} bg-primaryBlack min-h-screen transition-all duration-200 ease-linear`}>
            <div class={`flex items-center h-[4.8rem] bg-primaryBlack ${isCollapsed ? 'justify-end pr-8' : 'justify-center'}`}>
                <img src='assets/images/svgs/navbar/menu.svg' className='cursor-pointer' alt='menu' onClick={handleCollapse} width={30} />
            </div>
            <div class="flex flex-col">
                <nav class="flex-1 px-2 py-4 bg-primaryBlack flex flex-col gap-5">
                    <a href="#" class="flex items-center gap-3 py-2 text-gray-100">
                        <img src='assets/images/svgs/navbar/venu.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Lorem
                            </p>
                        )}
                    </a>
                    <a href="#" class=" flex items-center gap-3 py-2 mt-2 text-gray-100">
                        <img src='assets/images/svgs/navbar/home.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Lorem
                            </p>
                        )}
                    </a>
                    <a href="#" class={`flex items-center gap-3 py-2 mt-2 text-gray-100`}>
                        <img src='assets/images/svgs/navbar/stadium.svg' className='ps-5' alt='' />
                        {isCollapsed && (
                            <p className={`transition-opacity duration-300 ease-linear overflow-hidden ${isCollapsed ? 'opacity-100' : 'opacity-0'}`}>
                                Morem
                            </p>
                        )}
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
