import React from 'react'

export const PrimaryInput = ({ placeholder, name, type, onChange, className }) => {
    return (
        <div className='bg-black p-10'>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`rounded-md border bg-transparent border-[#454545] font-semibold px-5 py-3 w-full text-white focus:outline outline-primaryGreen  ${className}`}
            />
        </div>
    )
}

export const LabelInput = ({ placeholder, name, type, onChange, className, label , value}) => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <label className='text-white text-base'>{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className={`rounded-lg border bg-transparent border-[#454545] px-5 py-3 w-full text-white focus:outline outline-primaryGreen  ${className}`}
            />
        </div>
    )
}

