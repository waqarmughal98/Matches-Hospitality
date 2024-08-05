import React, { useRef, useEffect } from 'react';
import { useAppContext } from '../../UseContext/ContextProvider';

const Backdrop = () => {
  const { isModalOpen, closeModal, backdropContent } = useAppContext();
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className={`fixed inset-0 z-20 flex justify-center w-full h-[100vh] items-center transition-opacity duration-200 ease-linear `}>
      <div
        aria-hidden="true"
        className={`inset-0 w-full h-full bg-black/50 cursor-pointer absolute backdrop-blur-lg transition-opacity duration-200 ease-linear `}
        onClick={closeModal}
      ></div>
      <div
        ref={modalRef}
        className={`  relative max-h-[700px] transition-opacity duration-200 ease-linear overflow-y-auto overflow-x-hidden custom-scroll rounded-md`}
      >
        {backdropContent}
      </div>
    </div>
  );
};

export default Backdrop;
