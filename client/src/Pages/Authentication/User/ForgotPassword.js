import React from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/forgetBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../UseContext/ContextProvider'
import { URL } from '../../../utilities/ConstantData'
import { toast } from 'react-toastify'
import axios from 'axios'
const ForgotPassword = () => { 
    const navigate = useNavigate()
    const {  forgetPassworddata, forgetPasswordsSetter, isEmailValidate} = useAppContext()
    const handleClick=()=>{
        if(isEmailValidate(forgetPassworddata.email)){
            sendOtp()
        }
    }

    const sendOtp = async () => {
        axios.post(`${URL}/send-otp`, {email:forgetPassworddata.email})
        .then((res)=>{
            toast.success("Otp sent successfully to your email!")
            setTimeout(() => {
            navigate("/verify-code")
            }, 1500);
        })
        .catch ((error)=> {
            console.log(error)
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
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                                    Forgot your password
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    lorem ipsum is simply a dummy text
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-5'>
                                <div className='col-span-12'>
                                    <LabelInput name="email" value={forgetPassworddata.email}  onChange={(e)=>forgetPasswordsSetter(e)}  label='Enter your email address' />
                                </div>
                                <div className='col-span-12 pb-10'>
                                    <PrimaryButton disabled={!forgetPassworddata.email} onClick={handleClick} size='large' color='green'>
                                        Confirm email Address
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default ForgotPassword
