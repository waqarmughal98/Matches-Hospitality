import React from 'react'
import { Colors } from '../../utilities/Color';
import backIcon from '../../../src/assets/svgs/auth/back-arrow.svg'
import { useNavigate } from 'react-router-dom';
export const PrimaryButton = ({ onClick, children, className = '', disabled = false, type = 'button' }) => {
  const buttonStyle = {
    backgroundColor: Colors.primaryBlack,
  };
  return (
    <button
    onClick={onClick}
      className={`primaryBtn bg-primaryGreen w-full rounded-full text-black h-12 font-semibold ${className}`}
      disabled={disabled}
      type={type}
      style={buttonStyle}
      >
      {children}
    </button>
  );
};


export const SecondaryButton = ({ onClick, children, className = '', disabled = false, type = 'button' }) => {
  const navigate = useNavigate()
  const buttonStyle = {
    // backgroundColor: Colors.primaryBlack,
  };
  return (
    <button
      onClick={() => navigate(-1)}
      className={`primaryBtn bg-gradient-to-r from-[#88F67E]/20 to-[#181818]/0 px-7 rounded-full text-white h-10 flex items-center justify-center gap-1 ${className}`}
      disabled={disabled}
      type={type}
      style={buttonStyle}
    >
      <img src={backIcon} />
      <p className='text-sm font-semibold'>
        BACK
      </p>
    </button>
  );
};

export const SSOButton = ({ onClick, children, className = '', disabled = false, type = 'button', source, btnText }) => {
  const buttonStyle = {
    // backgroundColor: Colors.primaryBlack,
  };
  return (
    <button
      onClick={onClick}
      className={`primaryBtn bg-white w-full rounded-full text-black h-12 font-semibold flex justify-center items-center gap-2 ${className}`}
      disabled={disabled}
      type={type}
      style={buttonStyle}
    >
      <img src={source} width={20} />
      {btnText}
    </button>
  );
};



