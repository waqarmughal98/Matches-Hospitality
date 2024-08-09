import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const PrimaryInput = ({ placeholder, field, name, type, onChange, className, value, prefix }) => {
    const handleChange = (e) => {
        if (field == "number") {
            const newValue = e.target.value;
            const regex = /^[0-9]*\.?[0-9]*$/;
            if (regex.test(newValue)) {
                onChange(e);
            }
        } else {
            onchange(e)
        }

    };
    return (
        <div className="flex items-center rounded-md border border-[#454545] font-semibold px-5 py-3 w-full text-white focus:outline outline-primaryGreen">
            {prefix && <span className="font-semibold text-xl mr-2">{prefix}</span>}
            <input
                onChange={handleChange}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className={` bg-transparent outline-none px-4 ${className}`}
            />
        </div>
    );
};

export const LabelInput = ({
    placeholder,
    name,
    type,
    onChange,
    className,
    label,
    value,
    readOnly,
    onkeydown,
    showEyeIcon
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className='flex flex-col gap-3 w-full relative'>
            <label className='primaryText'>{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                onKeyDown={onkeydown}
                className={`rounded-lg border font-Manrope bg-transparent border-[#454545] px-4 py-3 w-full text-white focus:outline ${readOnly ? '' : 'outline-primaryGreen'} ${className}`}
            />
            {type === 'password' && showEyeIcon && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 top-9'>
                    <button
                        type='button'
                        onClick={togglePasswordVisibility}
                        className='text-gray-400 hover:text-gray-600'
                    >
                        {isPasswordVisible ? <FaEyeSlash className='h-5 w-5' /> : <FaEye className='h-5 w-5' />}
                    </button>
                </div>
            )}
        </div>
    );
};

