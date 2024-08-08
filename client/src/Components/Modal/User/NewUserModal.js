import React, { useState } from 'react'
import { LabelInput } from '../../UiElements/TextInputs';
import { PrimaryButton } from '../../UiElements/Buttons';
import axios from 'axios';
import { useAppContext } from '../../../UseContext/ContextProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../../utilities/ConstantData';

const UserModal = ({setNewUser}) => {
    const { closeModal, handleErrors, signUpDetails, signUpDetailsSetter , setSignUpDetails } = useAppContext()
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const validation = () => {
      if (!signUpDetails.userName) {
          toast.error("Full name is required");
          return false;
      }
      if (!signUpDetails.email) {
          toast.error("Email is required");
          return false;
      }
      if (!signUpDetails.password) {
          toast.error("Password is required");
          return false;
      }
      if (!confirmPassword) {
          toast.error("Confirm password is required");
          return false;
      }
      if (signUpDetails.password != confirmPassword) {
          toast.error("Password must be match");
          return false;
      }
      return true;
  };
  
    const handleCreateAccount = async () => {
      console.log('reached')
      if (!validation()) {
          return null
      }
      setLoading(true)
      axios.post(`${URL}/signup`, signUpDetails)
          .then((res) => {
              setLoading(false)
              toast.success("User created successfully!")
              setConfirmPassword("")
              closeModal()
              setNewUser(signUpDetails)
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
        <div className='grid grid-cols-12 justify-center p-20 lg:w-[800px] rounded-lg backdrop-blur-3xl m-auto mt-28 bg-black/40 overflow-auto custom-scroll max-h-[600px] overflow-y-auto'>
            <button
                type="button"
                className="absolute top-4 right-4    rtl:right-auto rtl:left-4"
                onClick={closeModal}
            >
                <svg
                    title="Close"
                    className="h-4 w-4 cursor-pointer text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Close</span>
            </button>
            <div className='lg:col-span-10 lg:col-start-2'>
          <div className='grid grid-cols-12 gap-y-8'>
            <div className='col-span-12 headerText'>Create User</div>
            <div className='col-span-12'>
              <div className='grid grid-cols-12 gap-y-5'>
                <div className='col-span-12'>
                  <LabelInput name="userName" value={signUpDetails.userName}  onChange={(e)=>signUpDetailsSetter(e)}  label='Full Name' />
                </div>
                <div className='col-span-12'>
                  <LabelInput name="email" value={signUpDetails.email}  onChange={(e)=>signUpDetailsSetter(e)} label='Email' />
                </div>
                <div className='col-span-12'>
                  <LabelInput label='Password' name="password" onChange={(e)=>signUpDetailsSetter(e)} value={signUpDetails.password} type='password' showEyeIcon={true} />
                </div>
                <div className='col-span-12'>
                  <LabelInput label='Confirm Password' type='password' showEyeIcon={true} name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
                </div>
                <div className='col-span-12'>
                  <PrimaryButton onClick={()=>handleCreateAccount()} size='large'> {loading ? 'Creating user...' : 'Create User'}</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default UserModal
