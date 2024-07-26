import React from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/forgetBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
import { LabelInput } from '../../../Components/UiElements/TextInputs'
const ForgotPassword = () => {
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
                                    <LabelInput label='Enter your email address' />
                                </div>
                                <div className='col-span-12 pb-10'>
                                    <PrimaryButton>
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
