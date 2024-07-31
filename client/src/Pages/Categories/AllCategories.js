import React, { useEffect, useState } from 'react'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import { useAppContext } from '../../UseContext/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
import { axiosInstance, URL } from '../../utilities/ConstantData';
import DeleteModal from '../../Components/Modal/DeleteModal';
const AllCategories = () => {
    const { handeErrors , showBackdropWithContent} = useAppContext()
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const [categoryData, setCategoryData] = useState()
    const CreateCategory =()=>{
        navigate('/create-category')
    }

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        setLoading(true)
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

    const data = [
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category3.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category2.webp',
            title: 'Formula 1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            logo: 'assets/images/userdashboard/event-logo2.png',
            banner: 'assets/images/Category/category1.webp',
            title: 'Aafcon',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ];

    const handleShowBackdrop = () => {
        const content = (
          <DeleteModal/>
        )
        showBackdropWithContent(content)
    }
    return categoryData && (
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
                        <div key={index} className='group relative xl:col-span-4 md:col-span-12 col-span-12 min-h-56 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]' style={{ backgroundImage: `url(${item.banner})` }}>
                            <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent to-primaryGreen/40 opacity-0 group-hover:opacity-30 transition-opacity duration-100 ease-linear h-full w-full"></div>
                            <div className='flex items-end absolute h-full w-full p-5 text-white group justify-between'>
                                <div className='flex flex-col gap-y-5 group'>
                                    <img src={`../../uploads/${item.logo}`} alt='logo' width={40} />
                                    <div>
                                        <p className='font-semibold text-lg'>{item.name}</p>
                                        <p className='w-3/4 text-sm'>{item.description}</p>
                                    </div>
                                </div>
                                <div className='flex gap-x-3 items-center group'>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-lg bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear' onClick={handleShowBackdrop}>
                                      <MdDeleteForever className='text-black text-lg'/>
                                    </div>
                                    <div className='h-8 w-8 flex-shrink-0 rounded-lg bg-primaryGreen flex justify-center items-center opacity-0 group-hover:opacity-100 group transition-opacity duration-100 ease-linear'>
                                      <FaEdit className='text-black text-lg'/>
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
