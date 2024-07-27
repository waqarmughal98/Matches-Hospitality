import React from 'react';
import { useModal } from '../../UseContext/ModalProvider';

const Backdrop = ({ children }) => {
    const { isModalOpen, closeModal } = useModal();
    if (!isModalOpen) return null;
    return (
        <div className="absolute inset-0 z-50 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center h-full w-full">
            <div
                aria-hidden="true"
                className="inset-0 w-full h-full bg-black/50 cursor-pointer absolute backdrop-blur-lg"
                onClick={closeModal}
            ></div>
            {children}
            <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
                    <button
                        type="button"
                        className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                        onClick={closeModal}
                    >
                        <svg
                            title="Close"
                            className="h-4 w-4 cursor-pointer text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Backdrop;
