import React, { useRef, useEffect } from 'react';
import { useAppContext } from '../../UseContext/ContextProvider';

const Backdrop = () => {
  const { isModalOpen, closeModal, backdropContent } = useAppContext();
  if (!isModalOpen) return null;

  return (
    <div className={`fixed inset-0 z-20 flex justify-center w-full h-[100vh] items-center`}>
      <div
        aria-hidden="true"
        className={`inset-0 w-full h-full bg-black/50 cursor-pointer absolute backdrop-blur-lg`}
        onClick={closeModal}
      ></div>
      <div
        className={`relative overflow-x-hidden custom-scroll rounded-md`}
      >
        {backdropContent}
      </div>
    </div>
  );
};

export default Backdrop;
