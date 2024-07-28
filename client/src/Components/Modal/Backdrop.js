import React from 'react';
import { useAppContext } from '../../UseContext/ContextProvider';

const Backdrop = () => {
  const { isModalOpen, closeModal, backdropContent } = useAppContext();
  if (!isModalOpen) return null;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center min-h-full overflow-y-auto overflow-x-hidden transition w-full">
      <div
        aria-hidden="true"
        className="inset-0 w-full h-full bg-black/50 cursor-pointer absolute backdrop-blur-lg"
        onClick={closeModal}
      ></div>
      <div className="relative w-full">
        {backdropContent}
      </div>
    </div>
  );
};

export default Backdrop;
