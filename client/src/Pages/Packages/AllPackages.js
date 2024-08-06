import React, { useState , useEffect} from 'react';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../Components/Modal/DeleteModal';
import { useAppContext } from '../../UseContext/ContextProvider';
import { axiosInstance, URL } from '../../utilities/ConstantData';
import Loader from '../../Components/UiElements/Loader';
import { toast } from 'react-toastify';
const AllPackages = () => {
    const navigate = useNavigate()
    const {showBackdropWithContent,handleErrors,setSelectedEditPackage,closeModal} = useAppContext()
    const [loading , setLoading] = useState(true)
    const [PackagesData, setPackagesData] = useState([])

    useEffect(()=>{
        fetchData()
      },[])

      const fetchData = async () => {
        axiosInstance().get(`${URL}/package/all`)
        .then((res)=>{
            setLoading(false)
            const data = res.data.data;
            setPackagesData(data)
        })
        .catch ((error)=> {
            setLoading(false)
            const errors=error?.response?.data?.errors
            const statusCode=error?.response?.status
            if(statusCode==401){
                toast.error(errors);
                navigate("/Login")
            }else{
                handleErrors(error)
            }
        })
    };


    const CreatePackage = ()=>{
        navigate('/package/create')
    }
    const filterPacakge = (id) => {
        setPackagesData(prevData => prevData.filter(team => team._id !== id));
    };
    
    const handleDelete = async (id) => {
        axiosInstance().delete(`${URL}/package/delete/${id}`)
        .then((res)=>{
            filterPacakge(id)
            closeModal()
            toast.success("Package deleted successfully")
        })
        .catch ((error)=> {
            const errors=error?.response?.data?.errors
            const statusCode=error?.response?.status
            if(statusCode==401){
                toast.error(errors);
                navigate("/Login")
            }else{
                handleErrors(error)
            }
        })
    };

    const handleEdit=(item)=>{
        setSelectedEditPackage(item)
        navigate('/package/edit')
    }

    const handleShowBackdrop = (id)=>{
        const content =(
            <DeleteModal item='package' handleDelete={handleDelete} id={id}/>
        )
        showBackdropWithContent(content)
    }

    return loading ? <Loader/> : (
        <div className='grid grid-cols-12 text-white gap-10 font-roboto'>
            <div className='col-span-12'>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-8 headerText'>
                                All Packages
                            </div>
                            <div className='grid col-span-4 justify-end'>
                                <PrimaryButton size='medium' className='font-semibold' onClick={()=>CreatePackage()}>
                                    Create New Package
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12 lg:gap-x-8 gap-y-8'>
                            <div className='col-span-12'>
                                <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5'>
                                    {/* <div className='grid lg:col-span-5 col-span-12 bg-white text-primaryBlack rounded-2xl p-6 min-h-[19rem]'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-col lg:gap-x-8 gap-y-8'>
                                                <div className='flex flex-col gap-3'>
                                                    <h1 className='text-3xl font-bold'>
                                                        Platinum Package
                                                    </h1>
                                                    <p className='text-sm w-11/12'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                                <div className='flex-1 flex justify-between items-center'>
                                                    <PrimaryButton size='medium'>View Details</PrimaryButton>
                                                    <div className='flex justify-end gap-x-4'>
                                                        <div className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                            <MdOutlineEdit />
                                                        </div>
                                                        <div className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer' onClick={handleShowBackdrop}>
                                                            <RiDeleteBinLine />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className='grid lg:col-span-12 col-span-12'>
                                        <div className='grid grid-cols-12 gap-5'>
                                            {PackagesData.map((item, index) => {
                                                return (
                                                    <div key={index} className='grid lg:col-span-4 col-span-12 bg-gradient-to-t from-primaryGreen/5 to-transparent bg-[#161616] rounded-2xl p-6 min-h-[19rem] items-center'>
                                                        <div className='flex flex-col gap-5'>
                                                            <h1 className='text-3xl font-bold'>
                                                                {item.name}
                                                            </h1>
                                                            <p className='text-white/50 text-sm'>
                                                                {item.description}
                                                            </p>
                                                            <div className='flex justify-between items-center'>
                                                                {/* <PrimaryButton size='medium' color='black'>
                                                                    View Details
                                                                </PrimaryButton> */}
                                                                 <h2 className='text-white font-bold text-3xl'>
                                                                    ${item.price}
                                                                </h2>
                                                                <div className='flex justify-end gap-x-4'>
                                                                    <div onClick={()=>handleEdit(item)} className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                                        <MdOutlineEdit className='text-black'/>
                                                                    </div>
                                                                    <div onClick={()=>handleShowBackdrop(item._id)} className='bg-primaryGreen h-8 w-8 rounded-md flex justify-center items-center cursor-pointer'>
                                                                        <RiDeleteBinLine className='text-black'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPackages;
