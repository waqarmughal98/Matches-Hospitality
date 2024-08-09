import React, { useEffect, useState } from 'react'
import { LabelInput } from '../../UiElements/TextInputs';
import Dropdown from '../../UiElements/Dropdowns';
import { PrimaryButton } from '../../UiElements/Buttons';
import { useAppContext } from '../../../UseContext/ContextProvider';
import { URL as API_URL, axiosInstance2, StorageURL } from '../../../utilities/ConstantData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const EditTeamModal = ({selectedItem,setUpdation}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedItems, setSelectedItems] = useState(null,)
    const { closeModal , handleErrors , categoryData } = useAppContext()
    const [name, setName] = useState(null);
    const [loading2 , setLoading2] = useState(false)
    const navigate = useNavigate()

    const handleSelect = (id) => {
        setSelectedItems(id)
    };

    useEffect(()=>{
      if(selectedItem){
        setName(selectedItem.name)
        setSelectedFile(selectedItem.logo)
      }
    },[selectedItem])

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
        }
    };

    const validation = () => {
         if (!name) {
            toast.error("Name is required and should be a non-empty string.");
            setLoading2(false)
            return false;
        }
        return true;
    };

    const handleEditTeam = () => {
        if(validation()){
            EditTeam()
        }
   };

   
   const EditTeam = async () => {
    setLoading2(true)
    const data = new FormData();
    data.append('name', name);
    data.append('categoryId', selectedItems?._id || selectedItem.categoryId);
    data.append('categoryName', selectedItems?.name || selectedItem.categoryName);
    if(selectedFile!="string"){
        data.append('logo', selectedFile);
    }

    axiosInstance2().put(`${API_URL}/team/edit/${selectedItem._id}`, data)
    .then((res)=>{
        const data=res.data.data
        setUpdation(data)
        setLoading2(false)
        toast.success("Team updated successfully")
        closeModal()
        navigate("/all-teams")
    })
    .catch ((error)=> {
        setLoading2(false)
        const errors=error?.response?.data?.errors
        const statusCode=error?.response?.status
        if(statusCode==401){
            toast.error(errors);
            try {
                localStorage.removeItem('userData')
              } catch (error) {
                console.log(error)
              } finally {
                navigate("/Login")
              }
        }else{
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
                        <div  className='cursor-pointer flex justify-center items-center flex-col gap-4'>
                            {typeof selectedFile=="string" ? (
                                <img
                                    src={`${StorageURL}/${selectedFile}`}
                                    alt='Profile Preview'
                                    className='w-full h-full rounded-full object-cover absolute'
                                />
                            ) : selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt='Profile Preview'
                                    className='w-full h-full rounded-full object-cover absolute'
                                />
                            ) : (
                                <>
                                    <p className='text-5xl font-bold text-white'>+</p>
                                    <p className='text-primaryGreen text-xs'>Upload Team Logo</p>
                                </>
                            )}
                        <div >
                        <div >
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleFileChange}
                                className='absolute inset-0 opacity-0 cursor-pointer'
                                />
                        </div>
                    </div>
                     </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='flex flex-col gap-5 justify-center m-auto'>
                            <LabelInput name="Name" value={name} onChange={(e)=>setName(e.target.value)} label='Team Name' />
                            <Dropdown
                                id="Categoty"
                                title="Category"
                                data={categoryData}
                                position="bottom-left"
                                hasImage={true}
                                style="custom-dropdown-style"
                                selectedId={selectedItem.categoryId}
                                onSelect={(id) => handleSelect(id)}
                                label='Team Category'
                            />
                            <PrimaryButton size='large' onClick={()=>handleEditTeam()} className='font-semibold mt-5'>{loading2 ? "Updating team..." : "Update Team"}</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTeamModal
