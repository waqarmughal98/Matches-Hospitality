import React, { useEffect, useState } from 'react'
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
    const { signUpDetails, signUpDetailsSetter, setSignUpDetails, handleErrors } = useAppContext()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")

    /* when user reload the screen on second step */
    useEffect(() => {
        if (!signUpDetails.email) {
            navigate("/signup")
        }
    }, [])

    const validation = () => {
        if (!signUpDetails.password) {
            toast.error("Password is required");
            return false;
        }
        if (confirmPassword != signUpDetails.password) {
            toast.error("Password must be match");
            return false;
        }

        return true;
    };

    
    const handleCreateAccount = async () => {
        if (!validation()) {
            return null
        }
        setLoading(true)
        axios.post(`${URL}/signup`, signUpDetails)
            .then((res) => {
                setLoading(false)
                const userData = res.data.data;
                localStorage.setItem('userData', JSON.stringify(userData));
                toast.success("Account created successfully!")
                setConfirmPassword("")
                setSignUpDetails({
                    userName:"",
                    email: "",
                    password: ""
                  })
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
                <div className='col-span-5 bg-primaryBlack rounded-xl p-12'>
                    <div className='grid grid-cols-12 gap-9'>
                        <div className='col-span-12'>
                            <SecondaryButton />
                        </div>
                        <div className='col-span-12'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div className='col-span-12 jumperHeading'>
                                    Finish Signing Up
                                </div>
                                <div className='col-span-12 text-sm text-white '>
                                    You’re creating an account with {" "}
                                    <span className='text-primaryGreen'>
                                        {signUpDetails.email}
                                    </span>
                                </div>``
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className='grid grid-cols-12 gap-y-5'>
                                <div className='col-span-12'>
                                    <LabelInput type='password' name="password" showEyeIcon={true} value={signUpDetails.password} onChange={(e) => signUpDetailsSetter(e)} label='Create Password' />
                                </div>
                                <div className='col-span-12'>
                                    <LabelInput type='password' name="confirm-password" showEyeIcon={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <PrimaryButton onClick={handleCreateAccount} disabled={loading} size='large' color='green'>
                                {loading ? 'Creating account...' : 'Create Account'}
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
