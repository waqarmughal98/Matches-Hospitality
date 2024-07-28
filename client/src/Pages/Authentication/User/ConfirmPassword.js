import React, { useEffect, useState } from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/confirmBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
import { useAppContext } from '../../../UseContext/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../../utilities/ConstantData'

const ConfirmPassword = () => {
    const {  forgetPassworddata, forgetPasswordsSetter} = useAppContext()
    const [ confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()
 
    /* if user reload the page */
    useEffect(()=>{
        if(!forgetPassworddata.email || !forgetPassworddata.email ){
            navigate("/forgot-password")
        }
    },[])

    const changePassword=()=>{
        if(confirmPassword==forgetPassworddata.new_password){
            resetPassword()
        }
        else{
            toast.error("Password does not match")
        }
    }
    
    const resetPassword = async (otp) => {
        axios.post(`${URL}/reset-password`, forgetPassworddata)
        .then((res)=>{
            toast.success("Password reset successfully!")
            setTimeout(() => {
            navigate("/login")
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
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                                    Confirm Your Password
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    lorem ipsum is simply a dummy text
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-7'>
                                <div className='col-span-12'>
                                    <LabelInput name="new_password" value={forgetPassworddata.new_password} onChange={(e)=>forgetPasswordsSetter(e)}  label='Enter Your New Password' />
                                </div>
                                <div className='col-span-12'>
                                    <LabelInput value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} label='Confirm Password' />
                                </div>
                                <div className='col-span-12'>
                                    <PrimaryButton onClick={changePassword} disabled={!forgetPassworddata.new_password || !confirmPassword} size='large' color='green'>
                                        Change Password
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

export default ConfirmPassword
