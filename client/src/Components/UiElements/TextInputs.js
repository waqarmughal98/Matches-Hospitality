import React from 'react'

export const PrimaryInput = ({ placeholder, field, name, type, onChange, className, value, prefix }) => {
    const handleChange = (e) => {
        if(field=="number"){
            const newValue = e.target.value;
            const regex = /^[0-9]*\.?[0-9]*$/;
            if (regex.test(newValue)) {
                onChange(e);
            }
        }else{
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
                className={` bg-transparent outline-none ${className}`}
            />
        </div>
    );
};

export const LabelInput = ({ placeholder, name, type, onChange, className, label , value , readOnly}) => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <label className='primaryText'>{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                className={`rounded-lg border font-jumper bg-transparent border-[#454545] px-5 py-3 w-full text-white focus:outline ${readOnly ? '' : 'outline-primaryGreen' }  ${className}`}
            />
        </div>
    )
}

