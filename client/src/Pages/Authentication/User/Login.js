import React, {useState} from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/loginBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
import { Link } from 'react-router-dom'
import { URL } from '../../../utilities/ConstantData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const handleChange = (e) =>{
        const { name , value } = e.target
        setLoginData((pre)=>({
            ...pre, [name]:value
        }))
    }

    const handleLoginIn = async () => {
        axios.post(`${URL}/login`, loginData)
        .then((res)=>{
            const userData = res.data.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            toast.success("Login successfully!")
            setTimeout(() => {
                navigate("/dashboard/")
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
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                                    UEFA Champions League Hospitality Packages
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    lorem ipsum is simply a dummy text
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-5'>
                                <div className='col-span-12'>
                                    <LabelInput name="email" onChange={(e)=>handleChange(e)} label='Email Address' />
                                </div>
                                <div className='col-span-12'>
                                    <div className='grid grid-cols-12 gap-2'>
                                        <div className='col-span-12'>
                                            <LabelInput name="password" onChange={(e)=>handleChange(e)} label='Password' />
                                        </div>
                                        <div className='col-span-12 text-white text-xs text-right'>
                                            <Link to={'/forgot-password'}>
                                                Forgot Password
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12'>
                                    <div className='grid grid-cols-12 gap-3'>
                                        <div className='col-span-12'>
                                            <PrimaryButton onClick={handleLoginIn} disabled={!loginData.email || !loginData.password} size='large' color='green'>
                                                    Log in
                                            </PrimaryButton>
                                        </div>
                                        <div className='col-span-12 text-white text-center'>
                                            Didn't have an account, <Link to={'/signup'} className='text-primaryGreen font-semibold'>Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login
