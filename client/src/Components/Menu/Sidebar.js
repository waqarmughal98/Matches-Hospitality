import React from 'react'

const Sidebar = () => {
  return (
    <div><div class="hidden md:flex flex-col w-24 bg-gray-800 min-h-screen">
    <div class="flex items-center justify-center h-[4.7rem] bg-gray-900">
        {/* <span class="text-white font-bold uppercase">Sidebar</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>
    <div class="flex flex-col flex-1">
        <nav class="flex-1 px-2 py-4 bg-gray-800">
            <a href="#" class="flex items-center justify-center py-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {/* Dashboard */}
            </a>
            <a href="#" class="flex items-center justify-center py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
                {/* Messages */}
            </a>
            <a href="#" class="flex items-center justify-center py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {/* Settings */}
            </a>
        </nav>
    </div>

</div>
      
    </div>
  )
}

export default Sidebar
