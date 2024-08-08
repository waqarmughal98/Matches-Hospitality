import React, { useEffect, useState } from 'react'
import loginBanner from '../../../src/assets/webp/auth/code-banner.webp'
import logo from '../../../src/assets/svgs/navbar/match-logo.svg'
import { useAppContext } from '../../UseContext/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import AuthLayout from '../../ThemeLayout/AuthLayout'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import {URL} from '../../../src/utilities/ConstantData'
const ConfirmPassword = () => {
    const {  forgetPassworddata, forgetPasswordsSetter} = useAppContext()
    const [ confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    /* if user reload the page */
    useEffect(()=>{
        if(!forgetPassworddata.email || !forgetPassworddata.email ){
            navigate("/forgot-password")
        }
    },[])


    const validation = () => {
        if (!forgetPassworddata.new_password) {
            toast.error("Password is required");
            return false;
        }
        if (!confirmPassword) {
            toast.error("Confirm Password is required");
            return false;
        }
        if (confirmPassword!=forgetPassworddata.new_password) {
            toast.error("Password must be match");
            return false;
        }
    
        return true;
    };
 

    const changePassword=()=>{
        if(validation()==true){
            resetPassword()
        }
    }
    
    const resetPassword = async (otp) => {
        setLoading(true)
        axios.post(`${URL}/reset-password`, forgetPassworddata)
        .then((res)=>{
            setLoading(false)
            toast.success("Password reset successfully!")
            setTimeout(() => {
            navigate("/login")
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
                <div className='col-span-5 bg-primaryBlack rounded-xl p-12'>
                    <div className='grid grid-cols-12 gap-9'>
                        <div className='col-span-12'>
                            <SecondaryButton />
                        </div>
                        <div className='col-span-12'>
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 jumperHeading'>
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
                                    <LabelInput type='password' showEyeIcon={true} name="new_password" value={forgetPassworddata.new_password}  onChange={(e)=>forgetPasswordsSetter(e)}  label='Enter Your New Password' />
                                </div>
                                <div className='col-span-12'>
                                    <LabelInput type='password' showEyeIcon={true} value={confirmPassword}  onChange={(e)=>setConfirmPassword(e.target.value)} label='Confirm Password' />
                                </div>
                                <div className='col-span-12'>
                                    <PrimaryButton onClick={changePassword}  size='large' color='green'>
                                        {loading ?  "Changing password..." : "Change Password"}
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
