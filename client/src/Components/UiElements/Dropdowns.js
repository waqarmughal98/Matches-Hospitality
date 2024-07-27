import React, { useState } from 'react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-dropdown relative flex flex-col">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 ps-1 pe-3 flex items-center gap-x-2 text-sm font-medium rounded-full borderbg-transparent text-gray-white shadow-sm  disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
        onClick={toggleDropdown}
      >
        <img
          className="w-10 h-10 rounded-full flex items-center object-cover"
          src="assets/images/svgs/navbar/profile.png "
          alt="Avatar"
        />
        <span className="font-medium truncate max-w-[7.5rem] text-white">Ali Hamza</span>
        <svg
          className={`transition-all ms-2 mt-1 duration-150 ease-linear ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`hs-dropdown-menu transition-opacity duration-200 ease-linear ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 absolute right-0 top-10`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          href="#"
        >
          Newsletter
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          href="#"
        >
          Purchases
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          href="#"
        >
          Downloads
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          href="#"
        >
          Team Account
        </a>
      </div>
    </div>
  );
};

export default ProfileDropdown;
