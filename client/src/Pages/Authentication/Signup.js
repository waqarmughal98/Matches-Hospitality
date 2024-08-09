import React, { useState } from 'react'
import loginBanner from '../../../src/assets/webp/auth/signup-banner.webp'
import logo from '../../../src/assets/svgs/navbar/match-logo.svg'
// import google from '../../../src/assets/svgs/auth/google.svg'
// import apple from '../../../src/assets/svgs/auth/apple.svg'
import AuthLayout from '../../ThemeLayout/AuthLayout'
import { PrimaryButton, SecondaryButton} from '../../Components/UiElements/Buttons'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import { useAppContext } from '../../UseContext/ContextProvider'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../utilities/ConstantData'
import axios from 'axios'
const Signup = () => {
  const { signUpDetails,signUpDetailsSetter,isEmailValidate,handleErrors}  = useAppContext()
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const validation = () => {
        if (!signUpDetails.userName) {
            toast.error("Full name is required");
            return false;
        }
        if (!signUpDetails.email) {
            toast.error("Email is required");
            return false;
        }

        return true;
    };

  const handleClick = () => {
    if(!validation()){
        return null
    }
    if(isEmailValidate(signUpDetails.email)){
        checkUserExists()
    }
  };

  const checkUserExists=()=>{
    setLoading(true)
    axios.post(`${URL}/check-user-exists`, {email : signUpDetails.email})
    .then((res) => {
        setLoading(false)
        navigate('/finish-signup'); 
    })
    .catch((error) => {
        setLoading(false)
        handleErrors(error)
    })
  }

    return (
        <AuthLayout backgroundImage={loginBanner}>
            <div className='grid grid-cols-12'>
                <div className='col-span-5 bg-primaryBlack rounded-xl p-12'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-12'>
                            <SecondaryButton />
                        </div>
                        <div className='col-span-12'>
                            <img src={logo} alt=''/>
                        </div>
                        <div className='col-span-12 jumperHeading'>
                            Sign Up/Sign In
                        </div>
                        <div className='col-span-12'>
                            <LabelInput name="userName" value={signUpDetails.userName}  onChange={(e)=>signUpDetailsSetter(e)} label='Full Name' />
                        </div>
                        <div className='col-span-12'>
                            <LabelInput name="email" value={signUpDetails.email}  onChange={(e)=>signUpDetailsSetter(e)} label='Email Address' />
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 mt-3'>
                                    <PrimaryButton  onClick={handleClick}  size='large' color='green'>
                                            {loading ? "Validating email address..."  : "Get Started"}
                                    </PrimaryButton>
                                </div>
                                {/* <div className='col-span-12'>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Signup
