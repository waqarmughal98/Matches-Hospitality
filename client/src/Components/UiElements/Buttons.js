import React from 'react'
import { Colors } from '../../utilities/Color';
import backIcon from '../../../src/assets/svgs/auth/back-arrow.svg'
import { useNavigate } from 'react-router-dom';
export const PrimaryButton = ({ onClick, children, className = '', disabled = false, type = 'button', size = 'full', color = "green" }) => {
  const buttonStyle = {
    backgroundColor: Colors.primaryBlack,
  };

  const sizeClasses =
    size === 'small' ? 'w-auto px-4 h-7 text-sm' :
      size === 'medium' ? 'w-auto px-10 h-[3.5rem]' :
        size === 'large' ? 'w-full h-12' :
          '';

  const bgColor =
    color === 'green' ? 'bg-primaryGreen text-black' : 'bg-[#020202] text-white'


  return (
    <button
      onClick={onClick}
      className={`primaryBtn ${bgColor} rounded-full ${sizeClasses} ${className}`}
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
      <img src={backIcon} alt='' />
      <p className='text-sm font-semibold'>
        BACK
      </p>
    </button>
  );
};

export const SSOButton = ({ onClick, className = '', disabled = false, type = 'button', source, btnText }) => {
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
      <img src={source} width={20} alt='' />
      {btnText}
    </button>
  );
};



