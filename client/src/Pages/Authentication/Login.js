import React, { useState } from 'react'
import loginBanner from '../../../src/assets/webp/auth/login-banner.webp'
import logo from '../../../src/assets/svgs/navbar/match-logo.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../utilities/ConstantData'
import AuthLayout from '../../ThemeLayout/AuthLayout'
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import { useAppContext } from '../../UseContext/ContextProvider'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { handleErrors } = useAppContext()

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData((pre) => ({
            ...pre, [name]: value
        }))
    }

    const handleLoginIn = async (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(`${URL}/login`, loginData)
            .then((res) => {
                setLoading(false)
                const userData = res.data.data;
                localStorage.setItem('userData', JSON.stringify(userData));
                toast.success("Login successfully!")
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1500);
            })
            .catch((error) => {
                setLoading(false)
                handleErrors(error)
            })
    };

    return (
        <AuthLayout backgroundImage={loginBanner}>
            <div className='grid grid-cols-12'>
                <div className='xl:col-span-5 md:col-span-6 col-span-12 xl:col-start-1 md:col-start-4 bg-primaryBlack rounded-xl sm:p-12 p-5'>
                    <div className='grid grid-cols-12 gap-y-9'>
                        <div className='col-span-12'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-3'>
                                <div className='col-span-12 jumperHeading'>
                                    Sign in to your Account
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    Please add your credentials to access the system.
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <form onSubmit={handleLoginIn}>
                                <div className='grid grid-cols-12 gap-y-5'>
                                    <div className='col-span-12'>
                                        <LabelInput name="email" onChange={(e) => handleChange(e)} label='Email Address' />
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='grid grid-cols-12 gap-2'>
                                            <div className='col-span-12'>
                                                <LabelInput type="password" name="password" onChange={(e) => handleChange(e)} label='Password' showEyeIcon={true} />
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
                                                <PrimaryButton type="submit" disabled={!loginData.email || !loginData.password || loading} size='large' color='green'>
                                                    {loading ? 'Logging in...' : 'Log in'}
                                                </PrimaryButton>
                                            </div>
                                            <div className='col-span-12 text-white text-center'>
                                                Didn't have an account? <Link to={'/signup'} className='text-primaryGreen font-semibold'>Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login
