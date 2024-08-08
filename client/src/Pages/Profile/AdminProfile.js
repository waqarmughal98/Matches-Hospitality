import React, { useState, useEffect, useRef } from 'react'
import { BiEdit } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { CiStar } from 'react-icons/ci'
import { toast } from 'react-toastify'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LabelInput } from '../../Components/UiElements/TextInputs'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import profile from '../../../src/assets/images/userdashboard/event1.jpg'
import { useAppContext } from '../../UseContext/ContextProvider'
import { axiosInstance, URL as API_URL, axiosInstance2 } from '../../utilities/ConstantData'
import { useNavigate } from 'react-router-dom';
export const AdminProfile = () => {
    const { handleErrors, setProfileUpdation } = useAppContext()
    const [userData, setUserData] = useState()
    const [passwordData, setPasswordData] = useState({
        old_password: "",
        current_password: "",
        password_confirmation: ""

    })
    const [userName, setUserName] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [loading2, setLoading2] = useState(false)
    const [profileFile, setProfileFile] = useState()
    const navigate = useNavigate()
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        setPasswordData((pre) => ({
            ...pre, [name]: value
        }))
    }

    const handleFileChange = (e) => {
        const image = e.target.files[0];
        console.log(image,'Image')
        setProfileFile(image)
        updateProfile(image)
    }

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const validatePasswordChange = () => {
        const { old_password, current_password, password_confirmation } = passwordData;
        if (!current_password) {
            toast.error("New password is required.");
            return false;
        }
        if (!password_confirmation) {
            toast.error("Password confirmation is required.");
            return false;
        }
        if (current_password !== password_confirmation) {
            toast.error("New password and confirmation do not match.");
            return false;
        }
        if (!old_password) {
            toast.error("Old password is required.");
            return false;
        }
        return true;
    };

    const handleChangePassword = () => {
        if (validatePasswordChange()) {
            changePassword()
        }
    }

    useEffect(() => {
        (async () => {
            const userdata = await JSON.parse(localStorage.getItem('userData'))
            setUserData(userdata)
            setUserName(userdata.userName)
            setProfileImage(userdata.profileImage)
        })()
    }, [])

    const changePassword = async () => {
        setLoading2(true)
        axiosInstance().post(`${API_URL}/change-password`, passwordData)
            .then((res) => {
                setLoading2(false)
                toast.success("Password changed successfully")
                navigate("/dashboard")
            })
            .catch((error) => {
                setLoading2(false)
                const errors = error?.response?.data?.errors
                const statusCode = error?.response?.status
                if (statusCode == 401) {
                    toast.error(errors);
                    try {
                        localStorage.removeItem('userData')
                    } catch (error) {
                        console.log(error)
                    } finally {
                        navigate("/Login")
                    }
                } else {
                    handleErrors(error)
                }
            })
    };

    const handleKeyDown = (e) => {
        if (e.key == "Enter" || e.key == "Tab") {
            updateProfile()
        }
    }

    const updateUserData = (data) => {
        try {
            let user = JSON.parse(localStorage.getItem('userData'));
            user.userName = userName;
            user.profileImage = data.profileImage;
            localStorage.setItem('userData', JSON.stringify(user));
        } catch (error) {
            console.log(error)
        } finally {
            setProfileImage(data.profileImage)
            setProfileUpdation({ userName, profileImage : data.profileImage })
        }
    }
    const updateProfile = async (image) => {
        const data = new FormData();
        data.append('userName', userName);
        data.append('profileImage',  image)

        axiosInstance2().patch(`${API_URL}/update-info`, data)
            .then((res) => {
                const data=res.data.data
                updateUserData(data)
                toast.success("Profile updated successfully")
            })
            .catch((error) => {
                const errors = error?.response?.data?.errors
                const statusCode = error?.response?.status
                if (statusCode == 401) {
                    toast.error(errors);
                    try {
                        localStorage.removeItem('userData')
                    } catch (error) {
                        console.log(error)
                    } finally {
                        navigate("/Login")
                    }
                } else {
                    handleErrors(error)
                }
            })
    };


    return (
        <div className='grid grid-cols-12 gap-y-5 '>
            <div className='col-span-12 min-h-72  rounded-lg grid'>
                <div className='flex flex-col relative'>
                    <div className='flex-1 bg-primaryGreen/80 rounded-t-md'></div>
                    <div className='flex-1 bg-black/60 rounded-b-md'></div>
                    <div className='absolute h-full w-full flex items-center px-5 text-white gap-5'>
                        <div className='h-40 w-40 rounded-full relative'>
                            <img src={`uploads/${profileImage}`} className='absolute h-full w-full rounded-full' />
                            <div
                                className="absolute cursor-pointer bg-primaryGreen right-2 bottom-4 h-7 w-7 rounded-lg flex items-center justify-center"
                                onClick={() => handleIconClick()}
                            >
                                <BiEdit className='text-black'/>
                                <input
                                    type="file"
                                    name="image"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 pt-24'>
                            <div className='headerText'>{userName}</div>
                            <div className=''>Admin</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12 text-white'>
                <div className='grid grid-cols-12 space-x-5'>
                    <div className='col-span-3 card rounded-lg'>
                        <div className='flex flex-col'>
                            <label className='Info border-b border-borderInput px-7 py-5 headerText'>Info</label>
                            <div className='flex flex-col gap-y-7 p-7'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <CgProfile className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Name</label>
                                            <p className='text-sm'>{userName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <MdOutlineMailOutline className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Email</label>
                                            <p className='text-sm'>{userData?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-3'>
                                        <CiStar className='text-2xl mt-1' />
                                        <div className='flex flex-col'>
                                            <label className='primaryText'>Role</label>
                                            <p className='text-sm'>{userData?.userType == "ap%4k45a5sd" ? 'Admin' : 'User'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-9 card rounded-lg p-7'>
                        <div className='grid grid-cols-12 gap-y-5'>
                            <div className='col-span-12'>
                                <div className='flex'>
                                    <LabelInput name='name' onkeydown={(e) => handleKeyDown(e)} value={userName} onChange={(e) => setUserName(e.target.value)} label='Full Name' />
                                </div>
                                <p className='text-sm mt-2 text-gray-300'>Note: To update the Full Name, simply type it in the input field and press Enter.</p>
                            </div>
                            <div className='col-span-12'>
                                <LabelInput name='old_password' value={passwordData.old_password} onChange={(e) => handleChange(e)} label='Old Password' />
                            </div>
                            <div className='col-span-12'>
                                <div className='flex gap-x-5'>
                                    <LabelInput name='current_password' value={passwordData.current_password} onChange={(e) => handleChange(e)} label='New Password' />
                                    <LabelInput name='password_confirmation' value={passwordData.password_confirmation} onChange={(e) => handleChange(e)} label='Confirm Password' />
                                </div>
                            </div>
                            <div className='grid col-span-12 justify-end'>
                                <PrimaryButton onClick={() => handleChangePassword()} size='medium'>{loading2 ? "Changing Password" : "Change Password"}</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
