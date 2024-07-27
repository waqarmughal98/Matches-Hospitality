import React from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/loginBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
import { Link } from 'react-router-dom'
const Login = () => {
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
                                    <LabelInput label='Email Address' />
                                </div>
                                <div className='col-span-12'>
                                    <div className='grid grid-cols-12 gap-2'>
                                        <div className='col-span-12'>
                                            <LabelInput label='Password' />
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
                                            <PrimaryButton size='full' color='green'>
                                                <Link to={'/dashboard'}>
                                                    Log in
                                                </Link>
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
