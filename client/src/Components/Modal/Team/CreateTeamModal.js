import React, { useState, useEffect } from 'react'
import { LabelInput } from '../../UiElements/TextInputs';
import Dropdown from '../../UiElements/Dropdowns';
import { PrimaryButton } from '../../UiElements/Buttons';
import { useAppContext } from '../../../UseContext/ContextProvider';
import { URL as API_URL, axiosInstance2 } from '../../../utilities/ConstantData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateTeamModal = ({ setTeamData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState(null);
    const [selectedItems, setSelectedItems] = useState(null,)
    const { closeModal, handleErrors, categoryData, openModal } = useAppContext()
    const [loading2, setLoading2] = useState(false)
    const navigate = useNavigate()

    const handleSelect = (id) => {
        setSelectedItems(id)
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const validation = () => {
        if (!selectedFile || !(selectedFile instanceof File)) {
            toast.error("Logo is required and should be a file.");
            setLoading2(false)
            return false;
        }
        if (!name) {
            toast.error("Name is required and should be a non-empty string.");
            setLoading2(false)
            return false;
        }
        if (!selectedItems) {
            toast.error("Kindly select category");
            setLoading2(false)
            return false;
        }
        return true;
    };

    const handleCreateTeam = () => {
        if (validation()) {
            CreateTeam()
        }
    };

    const CreateTeam = async () => {
        setLoading2(true)
        const data = new FormData();
        data.append('name', name);
        data.append('categoryId', selectedItems._id);
        data.append('categoryName', selectedItems.name);
        data.append('logo', selectedFile);

        axiosInstance2().post(`${API_URL}/team/create`, data)
            .then((res) => {
                const data = res.data.data
                setTeamData((pre) => ([...pre, data]))
                setLoading2(false)
                toast.success("Team created successfully")
                closeModal()
                navigate("/all-teams")
            })
            .catch((error) => {
                setLoading2(false)
                const errors = error?.response?.data?.errors
                const statusCode = error?.response?.status
                if (statusCode == 401) {
                    toast.error(errors);
                    navigate("/Login")
                } else {
                    handleErrors(error)
                }
            })
    };

    return (
        <div className='grid grid-cols-12 justify-center p-10 rounded-lg backdrop-blur-3xl m-auto mt-12 bg-black/40 max-h-full overflow-auto custom-scroll'>
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
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-y-5'>
                    <div className='relative w-48 h-48 rounded-full bg-[#1E1E1E] flex justify-center items-center flex-col gap-y-5 m-auto col-span-6 col-start-4'>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileChange}
                            className='absolute inset-0 opacity-0 cursor-pointer'
                        />
                        <div
                            className='cursor-pointer flex justify-center items-center flex-col gap-4'
                        >
                            {selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt='Profile Preview'
                                    className='absolute w-full h-full object-cover rounded-full'
                                />
                            ) : (
                                <>
                                    <p className='text-5xl font-bold text-white'>+</p>
                                    <p className='text-primaryGreen text-xs'>Upload Team Logo</p>
                                </>
                            )}
                        </div>
                        <div >
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleFileChange}
                                className='absolute inset-0 opacity-0 cursor-pointer'
                            />
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='flex flex-col gap-5 justify-center m-auto'>
                            <LabelInput name="name" onChange={(e) => setName(e.target.value)} label='Team Name' />
                            <Dropdown
                                id="Categoty"
                                title="Category"
                                data={categoryData}
                                position="bottom-left"
                                hasImage={true}
                                style="custom-dropdown-style"
                                selectedId={selectedItems}
                                onSelect={(id) => handleSelect(id)}
                                label='Team Category'
                            />
                            <PrimaryButton onClick={() => handleCreateTeam()} size='large' className='font-semibold mt-5'>{loading2 ? "Creating team..." : "Create Team"}</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamModal
