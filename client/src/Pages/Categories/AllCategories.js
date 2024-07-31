import React, { useEffect, useState } from 'react'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import { useAppContext } from '../../UseContext/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
import { axiosInstance, URL } from '../../utilities/ConstantData';
import Loader from '../../Components/UiElements/Loader';
const AllCategories = () => {
    const { handeErrors , showBackdropWithContent, closeModal , setSelectedEditCategory} = useAppContext()
    const [loading , setLoading] = useState(true)
    const navigate = useNavigate()
    const [categoryData, setCategoryData] = useState([])
    const CreateCategory =()=>{
        navigate('/create-category')
    }

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        axiosInstance().get(`${URL}/category/all`)
        .then((res)=>{
            setLoading(false)
            const data = res.data.data;
            setCategoryData(data)
        })
        .catch ((error)=> {
            setLoading(false)
            const errors=error?.response?.data?.errors
            const statusCode=error?.response?.status
            if(statusCode==401){
                toast.error(errors);
                navigate("/Login")
            }else{
                handeErrors(error)
            }
        })
    };

    const filterCategory = (id) => {
        setCategoryData(prevData => prevData.filter(category => category._id !== id));
    };

    const handleDelete = async (id) => {
        axiosInstance().delete(`${URL}/category/delete/${id}`)
        .then((res)=>{
            filterCategory(id)
            closeModal()
            toast.success("Category deleted successfully")
        })
        .catch ((error)=> {
            const errors=error?.response?.data?.errors
            const statusCode=error?.response?.status
            if(statusCode==401){
                toast.error(errors);
                navigate("/Login")
            }else{
                handeErrors(error)
            }
        })
    };

    const handleEdit = (id) => {
        const selectedCategory = categoryData.find(item => item._id === id);
        setSelectedEditCategory(selectedCategory);
        navigate("/edit-category");
    }
 
    const handleShowBackdrop = (id) => {
        const content = (
            <div className='flex-1'>
                <div class="relative p-4 text-center rounded-lg shadow backdrop-blur-3xl bg-black/40 sm:p-5">
                    <button onClick={()=>closeModal()} type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                    <div class="flex justify-center items-center space-x-4">
                        <button onClick={()=>closeModal()} data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, cancel
                        </button>
                        <button onClick={()=>handleDelete(id)} type="submit" class="py-2 px-3 text-sm font-medium text-center text-black bg-primaryGreen rounded-lg">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        )
        showBackdropWithContent(content)
    }
    return loading ? <Loader/> : (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12 text-white'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-3xl'>All Categories</h1>
                    <PrimaryButton size='medium' onClick={CreateCategory}>
                        Create Category
                    </PrimaryButton>
                </div>
            </div>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-5'>
                    {categoryData.map((item, index) => (
                        <div key={index} className='group relative xl:col-span-4 md:col-span-12 col-span-12 min-h-56 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]' style={{ backgroundImage: `url("../../uploads/${item.banner_image}")` }}>
                            <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent to-primaryGreen/40 opacity-0 group-hover:opacity-30 transition-opacity duration-100 ease-linear h-full w-full"></div>
                            <div className='flex items-end absolute h-full w-full p-5 text-white group'>
                                <div className='flex flex-col gap-y-5 group'>
                                    <img src={`../../uploads/${item.logo}`} alt='logo' width={40} />
                                    <div>
                                        <p className='font-semibold text-lg'>{item.name}</p>
                                        <p className='w-3/4 text-sm'>{item.description}</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center group'>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear' onClick={()=>handleShowBackdrop(item._id)}>
                                      <MdDeleteForever />
                                    </div>
                                    <div onClick={()=>handleEdit(item._id)} className='h-8 w-8 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear'>
                                      <FaEdit />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCategories
