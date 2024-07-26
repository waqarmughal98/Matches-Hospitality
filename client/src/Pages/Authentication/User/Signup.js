import React from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/signupBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton, SSOButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
import google from '../../../../src/assets/svgs/auth/google.svg'
import apple from '../../../../src/assets/svgs/auth/apple.svg'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <AuthLayout backgroundImage={loginBanner}>
            <div className='grid grid-cols-12'>
                <div className='col-span-5 bg-primaryBlack rounded-xl p-10 min-h-[100vh]'>
                    <div className='grid grid-cols-12 gap-9'>
                        <div className='col-span-12'>
                            <SecondaryButton />
                        </div>
                        <div className='col-span-12'>
                            <img src={logo} alt=''/>
                        </div>
                        <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                            Sign Up/Sign In
                        </div>
                        <div className='col-span-12'>
                            <LabelInput label='Email Address' />
                        </div>
                        <div className='col-span-12 pb-10'>
                            <div className='grid grid-cols-12 gap-5'>
                                <div className='col-span-12'>
                                    <PrimaryButton>
                                        <Link to={'/finish-signup'}>
                                        Get Started
                                        </Link>
                                    </PrimaryButton>
                                </div>
                                <div className='col-span-12'>
                                    <div className='grid grid-cols-12 items-center'>
                                        <div className='col-span-5 bg-white h-[1px]'></div>
                                        <div className='col-span-2 text-white text-center'>Or</div>
                                        <div className='col-span-5 bg-white h-[1px]'></div>
                                    </div>
                                </div>
                                <div className='col-span-12'>
                                    <SSOButton btnText='Continue with Google' source={google} />
                                </div>
                                <div className='col-span-12'>
                                    <SSOButton btnText='Continue with Google' source={apple} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Signup
