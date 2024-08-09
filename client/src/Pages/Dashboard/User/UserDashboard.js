// UserDashboard.js
import React, { useEffect, useState } from 'react';
import CustomSlider from '../../../Components/Slider/CustomSlider';
import { useAppContext } from '../../../UseContext/ContextProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, URL } from '../../../utilities/ConstantData';
import Loader from '../../../Components/UiElements/Loader';
const UserDashboard = () => {
  const {categoryData, setCategoryData,handleErrors} = useAppContext()
  const [loading , setLoading] = useState(true)
  const navigate = useNavigate()

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

  const slides = categoryData.length>0 &&  categoryData.map((item, index) => (
    <div key={index} className='min-h-56 rounded-xl bg-cover bg-center border border-borderInput flex items-end p-5' style={{ backgroundImage: `url("/uploads/${item.banner_image}")` }}>
      <div className='flex items-end h-full text-white'>
        <div className='flex flex-col gap-y-5'>
          {item.logo && <img src={`/uploads/${item.logo}`} alt='logo' width={40} />}
          <div>
            <p className='font-semibold text-lg'>{item.name}</p>
            <p className='w-2/4 text-sm'>{item.description}</p>
          </div>
        </div>
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center  shadow-primaryGreen shadow-sm'>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  ));

  return loading ? <Loader/> : (
    <div className='grid grid-cols-12'>
      <div className='col-span-12'>
        <CustomSlider
          slides={slides}
          slidesToShow={3}
          slidesToScroll={1}
          infinite={false}
          speed={500}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
