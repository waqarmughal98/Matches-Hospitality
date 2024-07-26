import React from 'react'
import AuthLayout from '../../../ThemeLayout/AuthLayout'
import loginBanner from '../../../../src/assets/svgs/auth/codeBanner.webp'
import logo from '../../../../src/assets/svgs/navbar/match-logo.svg'
import { PrimaryButton, SecondaryButton } from '../../../Components/UiElements/Buttons'
const VerifyCode = () => {
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
                            <div className="flex gap-2">
                                <input maxlength="1" value={1} className="w-10 h-10 text-white text-sm text-center bg-transparent border border-[#454545] rounded-lg focus:outline-none transition-all duration-300" type="text" placeholder="" />
                                <input maxlength="1" value={4} className="w-10 h-10 text-white text-sm text-center bg-transparent border border-[#454545] rounded-lg focus:outline-none transition-all duration-300" type="text" placeholder="" />
                                <input maxlength="1" value={7} className="w-10 h-10 text-white text-sm text-center bg-transparent border border-[#454545] rounded-lg focus:outline-none transition-all duration-300" type="text" placeholder="" />
                                <input maxlength="1" value={2} className="w-10 h-10 text-white text-sm text-center bg-transparent border border-[#454545] rounded-lg focus:outline-none transition-all duration-300" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <PrimaryButton>
                                Confirm Code
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default VerifyCode
