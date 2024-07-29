import React , {useEffect, useState}from 'react'
import loginBanner from '../../../src/assets/webp/auth/finish-banner.webp'
import logo from '../../../src/assets/svgs/navbar/match-logo.svg'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../utilities/ConstantData';
import AuthLayout from '../../ThemeLayout/AuthLayout';
import { PrimaryButton, SecondaryButton } from '../../Components/UiElements/Buttons';
import { LabelInput } from '../../Components/UiElements/TextInputs';
import { useAppContext } from '../../UseContext/ContextProvider';
const FinishSignup = () => {
    const {signUpDetails, signUpDetailsSetter} = useAppContext()
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    /* when user reload the screen on second step */
    useEffect(()=>{
         if(!signUpDetails.email){
            navigate("/signup")
         }
    },[])

    const handleCreateAccount = async () => {
        setLoading(true)
        axios.post(`${URL}/signup`, signUpDetails)
        .then((res)=>{
            setLoading(false)
            const userData = res.data.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            toast.success("Account created successfully!")
            setTimeout(() => {
                navigate("/dashboard")
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
                                    Finish Signing Up
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    You’re creating an account with {" "}
                                    <span className='text-primaryGreen'>
                                         {signUpDetails.email}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <LabelInput name="password" value={signUpDetails.password} onChange={(e)=>signUpDetailsSetter(e)} label='Create Password' />
                        </div>
                        <div className='col-span-12'>
                            <PrimaryButton onClick={handleCreateAccount} disabled={!signUpDetails.password || loading} size='large' color='green'>
                            {loading ? 'Creating account...' :  'Create Account'}
                            </PrimaryButton>
                        </div>
                        <div className='col-span-12 text-base text-white'>
                            By selecting ‘Create Account,’ <br></br>
                            I agree to the {" "} <span className='text-primaryGreen font-semibold'>Terms of Service</span> {" "} and <span className='text-primaryGreen font-semibold'>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default FinishSignup
