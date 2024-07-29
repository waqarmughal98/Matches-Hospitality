import React from 'react'
import loginBanner from '../../../src/assets/webp/auth/signup-banner.webp'
import logo from '../../../src/assets/svgs/navbar/match-logo.svg'
import google from '../../../src/assets/svgs/auth/google.svg'
import apple from '../../../src/assets/svgs/auth/apple.svg'
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../ThemeLayout/AuthLayout'
import { PrimaryButton, SecondaryButton, SSOButton } from '../../Components/UiElements/Buttons'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import { useAppContext } from '../../UseContext/ContextProvider'
const Signup = () => {
  const { signUpDetails,signUpDetailsSetter,isEmailValidate}  = useAppContext()
  const navigate = useNavigate();
  const handleClick = () => {
    if(isEmailValidate(signUpDetails.email)){
        navigate('/finish-signup'); 
    }
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
                            <img src={logo} alt=''/>
                        </div>
                        <div className='col-span-12 text-white text-headerText leading-tight font-semibold'>
                            Sign Up/Sign In
                        </div>
                        <div className='col-span-12'>
                            <LabelInput name="email" value={signUpDetails.email}  onChange={(e)=>signUpDetailsSetter(e)} label='Email Address' />
                        </div>
                        <div className='col-span-12 pb-10'>
                            <div className='grid grid-cols-12 gap-5'>
                                <div className='col-span-12'>
                                    <PrimaryButton  onClick={handleClick}  disabled={!signUpDetails.email} size='large' color='green'>
                                            Get Started
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
