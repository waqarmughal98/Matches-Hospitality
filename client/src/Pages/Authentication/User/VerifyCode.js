import React, { useState, useRef, useEffect } from 'react';
import AuthLayout from '../../../ThemeLayout/AuthLayout';
import loginBanner from '../../../../src/assets/webp/auth/code-banner.webp';
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg';
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../UseContext/ContextProvider'
import { URL } from '../../../utilities/ConstantData'
import { toast } from 'react-toastify'
import axios from 'axios'
const VerifyCode = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const {  forgetPassworddata, setforgetPassworddata } = useAppContext()
    /* if user reload the page */
    useEffect(()=>{
        if(!forgetPassworddata.email){
          navigate("/forgot-password")  
        }
    },[])
    const [loading , setLoading] = useState(false)
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        if (value && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('Text').slice(0, 4);
        if (/^\d{1,4}$/.test(pasteData)) {
            const newOtp = pasteData.split('');
            for (let i = newOtp.length; i < 4; i++) {
                newOtp.push('');
            }
            setOtp(newOtp);
            if (newOtp.length === 4) {
                inputRefs.current[3].focus();
            } else {
                inputRefs.current[newOtp.length].focus();
            }
        }
    };

    const allFieldsFilled = otp.every(value => value.length === 1);

    const handleClick = () => {
        const otpCode = otp.join('');
        setforgetPassworddata((pre)=>({...pre,otp:otpCode}))
        verifyOtp(otpCode)
    };

    const verifyOtp = async (otp) => {
        setLoading(true)
        axios.post(`${URL}/verify-otp`, {email:forgetPassworddata.email , otp })
        .then((res)=>{
            setLoading(false)
            toast.success("Otp verified successfully!")
            setTimeout(() => {
            navigate("/confirm-password")
            }, 1500);
        })
        .catch ((error)=> {
            setLoading(false)
            const errors=error?.response?.data?.errors
            if (typeof errors == 'string') {
                toast.error(errors);
            } else if (errors && Array.isArray(errors)) {
                errors.forEach((err) => {
                    toast.error(err.msg);
                });
            } else {
                toast.error('An unknown error occurred.');
            }
        })
    };

   

    return (
        <AuthLayout backgroundImage={loginBanner}>
            <div className='grid grid-cols-12'>
                <div className='col-span-5 bg-primaryBlack rounded-xl p-10 min-h-[100vh]'>
                    <div className='grid grid-cols-12 gap-9'>
                        <div className='col-span-12'>
                            <SecondaryButton />
                        </div>
                        <div className='col-span-12'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                                    Get your code
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    Lorem Ipsum is simply a dummy text
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className="flex gap-2" onPaste={handlePaste}>
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        ref={el => inputRefs.current[index] = el}
                                        maxLength="1"
                                        value={value}
                                        className="w-10 h-10 text-white text-sm text-center bg-transparent border border-[#454545] rounded-lg focus:outline-none transition-all duration-300"
                                        type="text"
                                        onChange={e => handleChange(e, index)}
                                        onKeyDown={e => handleKeyDown(e, index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <PrimaryButton 
                                onClick={handleClick} 
                                size='large' 
                                color='green' 
                                disabled={!allFieldsFilled}
                            >
                                {loading ? "Verifying code..." : "Confirm Code"}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default VerifyCode;
