import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { GoChevronDown } from 'react-icons/go';
import { useAppContext } from '../../UseContext/ContextProvider';
export const ProfileDropdown = () => {
  const { openModal, closeModal, setIsOpen, isOpen, showBackdropWithContent } = useAppContext()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeModal()
    } else {
      openModal()
      showBackdropWithContent('')
    }
  };

  return (
    <div className="hs-dropdown relative flex flex-col">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 ps-1 pe-3 flex items-center gap-x-2 text-sm font-medium rounded-full borderbg-transparent shadow-sm  disabled:opacity-50 disabled:pointer-events-none"
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
        className={`hs-dropdown-menu transition-opacity duration-200 ease-linear ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-60 bg-[#121212] shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 absolute right-0 top-10`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <ul class="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          <li>
            <a href="#" class="flex items-center gap-3 px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2.75C6.75 2.33579 6.41421 2 6 2C5.58579 2 5.25 2.33579 5.25 2.75V4.00879C3.43368 4.13698 2 5.65106 2 7.5V8.5C2 10.3489 3.43368 11.863 5.25 11.9912L5.25 17.25C5.25 17.6642 5.58579 18 6 18C6.41421 18 6.75 17.6642 6.75 17.25L6.75 11.9912C8.56632 11.863 10 10.3489 10 8.5V7.5C10 5.65106 8.56632 4.13698 6.75 4.00879V2.75ZM8.5 7.5C8.5 6.39543 7.60457 5.5 6.5 5.5H5.5C4.39543 5.5 3.5 6.39543 3.5 7.5V8.5C3.5 9.60457 4.39543 10.5 5.5 10.5H6.5C7.60457 10.5 8.5 9.60457 8.5 8.5V7.5Z" fill="#9B9B9B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.75L13.25 8.00879C11.4337 8.13698 10 9.65106 10 11.5V12.5C10 14.3489 11.4337 15.863 13.25 15.9912L13.25 17.25C13.25 17.6642 13.5858 18 14 18C14.4142 18 14.75 17.6642 14.75 17.25L14.75 15.9912C16.5663 15.863 18 14.3489 18 12.5V11.5C18 9.65106 16.5663 8.13698 14.75 8.00879L14.75 2.75C14.75 2.33579 14.4142 2 14 2C13.5858 2 13.25 2.33579 13.25 2.75ZM13.5 9.5C12.3954 9.5 11.5 10.3954 11.5 11.5V12.5C11.5 13.6046 12.3954 14.5 13.5 14.5H14.5C15.6046 14.5 16.5 13.6046 16.5 12.5V11.5C16.5 10.3954 15.6046 9.5 14.5 9.5H13.5Z" fill="#9B9B9B" />
              </svg>
              Profile Settings
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-3 px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12318 7.95107C4.52295 4.94993 6.81842 2.1499 9.87899 2.1499H10.4998C13.1864 2.1499 15.3498 4.35874 15.3498 7.02923C15.3498 8.52259 14.6614 9.95105 13.4774 10.8719L10.9077 12.8706C10.8711 12.899 10.8498 12.9427 10.8498 12.989V13.4999C10.8498 13.9693 10.4692 14.3499 9.99978 14.3499C9.53033 14.3499 9.14978 13.9693 9.14978 13.4999V12.989C9.14978 12.4181 9.41335 11.8792 9.86399 11.5287L12.4337 9.53003C13.1984 8.93525 13.6498 8.00458 13.6498 7.02923C13.6498 5.28143 12.2314 3.8499 10.4998 3.8499H9.87899C7.8912 3.8499 6.40032 5.66847 6.79016 7.61767L6.83327 7.8332C6.92533 8.29353 6.6268 8.74133 6.16647 8.8334C5.70615 8.92546 5.25835 8.62693 5.16628 8.1666L5.12318 7.95107Z" fill="#9B9B9B" />
                <circle cx="10.0008" cy="16.7" r="0.6" stroke="#9B9B9B" stroke-width="1.2" />
              </svg>
              Help Center
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-3 px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99977 1.97705C10.414 1.97705 10.7498 2.31284 10.7498 2.72705V3.38865C10.7498 3.80287 10.414 4.13865 9.99977 4.13865C9.58556 4.13865 9.24977 3.80287 9.24977 3.38865V2.72705C9.24977 2.31284 9.58556 1.97705 9.99977 1.97705ZM9.99977 12.4668C11.3622 12.4668 12.4667 11.3623 12.4667 9.99982C12.4667 8.63735 11.3622 7.53286 9.99977 7.53286C8.63731 7.53286 7.53281 8.63735 7.53281 9.99982C7.53281 11.3623 8.63731 12.4668 9.99977 12.4668ZM9.99977 13.9668C12.1907 13.9668 13.9667 12.1907 13.9667 9.99982C13.9667 7.80893 12.1907 6.03286 9.99977 6.03286C7.80888 6.03286 6.03281 7.80893 6.03281 9.99982C6.03281 12.1907 7.80888 13.9668 9.99977 13.9668ZM10.7498 16.6114C10.7498 16.1972 10.414 15.8614 9.99977 15.8614C9.58556 15.8614 9.24977 16.1972 9.24977 16.6114V17.273C9.24977 17.6872 9.58556 18.023 9.99977 18.023C10.414 18.023 10.7498 17.6872 10.7498 17.273V16.6114ZM15.6727 4.32685C15.9656 4.61975 15.9656 5.09462 15.6727 5.38751L15.2048 5.85533C14.9119 6.14823 14.4371 6.14823 14.1442 5.85533C13.8513 5.56244 13.8513 5.08757 14.1442 4.79467L14.612 4.32685C14.9049 4.03396 15.3798 4.03396 15.6727 4.32685ZM5.85492 15.2053C6.14782 14.9124 6.14782 14.4375 5.85492 14.1446C5.56203 13.8517 5.08716 13.8517 4.79426 14.1446L4.32644 14.6124C4.03355 14.9053 4.03355 15.3802 4.32644 15.6731C4.61933 15.966 5.09421 15.966 5.3871 15.6731L5.85492 15.2053ZM18.0225 9.99982C18.0225 10.414 17.6868 10.7498 17.2725 10.7498H16.6109C16.1967 10.7498 15.8609 10.414 15.8609 9.99982C15.8609 9.58561 16.1967 9.24982 16.6109 9.24982H17.2725C17.6868 9.24982 18.0225 9.58561 18.0225 9.99982ZM3.38816 10.7498C3.80238 10.7498 4.13816 10.414 4.13816 9.99982C4.13816 9.58561 3.80238 9.24982 3.38816 9.24982H2.72656C2.31235 9.24982 1.97656 9.58561 1.97656 9.99982C1.97656 10.414 2.31235 10.7498 2.72656 10.7498H3.38816ZM15.6727 15.6728C15.3798 15.9657 14.9049 15.9657 14.612 15.6728L14.1442 15.205C13.8513 14.9121 13.8513 14.4372 14.1442 14.1443C14.4371 13.8514 14.9119 13.8514 15.2048 14.1443L15.6727 14.6121C15.9656 14.905 15.9656 15.3799 15.6727 15.6728ZM4.79426 5.85505C5.08716 6.14795 5.56203 6.14795 5.85492 5.85505C6.14782 5.56216 6.14782 5.08729 5.85492 4.79439L5.3871 4.32657C5.09421 4.03368 4.61933 4.03368 4.32644 4.32657C4.03355 4.61946 4.03355 5.09434 4.32644 5.38723L4.79426 5.85505Z" fill="#9B9B9B" />
              </svg>
              Light Mode
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-3 px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5303 4.46967C10.2374 4.17678 9.76256 4.17678 9.46967 4.46967L4.6967 9.24264C4.40381 9.53553 4.40381 10.0104 4.6967 10.3033C4.98959 10.5962 5.46447 10.5962 5.75736 10.3033L10 6.06066L14.2426 10.3033C14.5355 10.5962 15.0104 10.5962 15.3033 10.3033C15.5962 10.0104 15.5962 9.53553 15.3033 9.24264L10.5303 4.46967ZM6 16.25C5.58579 16.25 5.25 16.5858 5.25 17C5.25 17.4142 5.58579 17.75 6 17.75V16.25ZM10.75 13V5H9.25V13H10.75ZM9.25 13C9.25 14.7949 7.79493 16.25 6 16.25V17.75C8.62335 17.75 10.75 15.6234 10.75 13H9.25Z" fill="#9B9B9B" />
                <path d="M4 3H16" stroke="#9B9B9B" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              Upgrade Plan
            </a>
          </li>
        </ul>
        <div class="py-2">
          <a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-white">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 11.2C13.3866 11.2 13.7 10.8866 13.7 10.5C13.7 10.1134 13.3866 9.8 13 9.8L13 11.2ZM2.50503 10.005C2.23166 10.2784 2.23166 10.7216 2.50503 10.995L6.9598 15.4497C7.23316 15.7231 7.67638 15.7231 7.94975 15.4497C8.22311 15.1764 8.22311 14.7332 7.94975 14.4598L3.98995 10.5L7.94975 6.5402C8.22312 6.26683 8.22312 5.82362 7.94975 5.55025C7.67638 5.27688 7.23317 5.27688 6.9598 5.55025L2.50503 10.005ZM13 9.8L3 9.8L3 11.2L13 11.2L13 9.8Z" fill="#9B9B9B" />
              <path d="M10 7V6C10 4.61929 11.1193 3.5 12.5 3.5H14.5C15.8807 3.5 17 4.61929 17 6V15C17 16.3807 15.8807 17.5 14.5 17.5H12.5C11.1193 17.5 10 16.3807 10 15V14.5" stroke="#9B9B9B" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};


// filterdropdowns

export const FilterDropdown = ({ isActive, onClick, children, text }) => {
  return (
    <div className="relative mb-2">
      <button
        className="px-4 py-2 bg-transparent text-white rounded-md flex justify-between w-full"
        onClick={onClick}
      >
        <span>{text}</span>
        <svg
          className={`transition-all ms-2 mt-1 duration-150 ease-linear ${isActive ? 'rotate-180' : ''} }`}
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
      <div className={`dropdown-content ${isActive ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};


// select dropdown
const Dropdown = ({
  id,
  title = 'Select',
  data,
  position = 'bottom-left',
  hasImage,
  style,
  selectedId,
  onSelect,
  label,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    selectedId ? data.find((item) => item._id == selectedId) : undefined
  );
  console.log(data)
  console.log("selectedId..",selectedId)
  console.log("selectedItem..",selectedItem)

  const dropdownRef = useRef(null);
  const handleChange = (item) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item._id == selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownClass = classNames(
    'absolute bg-[#343434] w-full max-h-60 overflow-y-auto rounded shadow-md z-10 mt-2',
    {
      'cursor-not-allowed opacity-50': disabled,
    }
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <div className='flex flex-col gap-y-3'>
        {label && (
          <label className={classNames('text-white text-base', { 'opacity-50': disabled })}>
            {label}
          </label>
        )}
        <div>
          <button
            id={id}
            aria-label='Toggle dropdown'
            aria-haspopup='true'
            aria-expanded={isOpen}
            type='button'
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={classNames(
              'flex justify-between items-center gap-5 rounded w-full py-2 px-4 bg-transparent focus:border-primaryGreen border border-borderInput text-white',
              style,
              { 'cursor-not-allowed opacity-50': disabled }
            )}
            disabled={disabled}
          >
            <div className='flex items-center gap-5'>
              {selectedItem?.logo && (
                <img
                  src={`/uploads/${selectedItem.logo}`}
                  alt='Selected'
                  className='w-7 h-7 rounded-full bg-gray-400 object-cover me-2'
                />
              )}
              <span>{selectedItem?.name || title}</span>
            </div>
            <GoChevronDown
              size={20}
              className={classNames('transform duration-500 ease-in-out', {
                'rotate-180': isOpen,
              })}
            />
          </button>
          {isOpen && (
            <div aria-label='Dropdown menu' className={dropdownClass}>
              <ul
                role='menu'
                aria-labelledby={id}
                aria-orientation='vertical'
                className='leading-10'
              >
                {data.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => !disabled && handleChange(item)}
                    className={classNames(
                      'flex items-center cursor-pointer px-3 gap-3 text-white py-3 border-b border-borderInput hover:bg-black/30',
                      { 'bg-black/30': selectedItem?.id === item.id }
                    )}
                  >
                    {hasImage && item.logo && (
                      <img
                        src={`/uploads/${item.logo}`}
                        alt={item.name}
                        loading='lazy'
                        className='w-7 h-7 rounded-full bg-gray-400 object-cover me-2'
                      />
                    )}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
