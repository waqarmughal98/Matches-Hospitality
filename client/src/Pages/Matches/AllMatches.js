import React ,{useEffect, useState}from 'react'
import MatchCard from '../../Components/Cards/MatchCard'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import { useNavigate } from 'react-router-dom'
import { axiosInstance, URL } from '../../utilities/ConstantData';
import Loader from '../../Components/UiElements/Loader';
import { useAppContext } from '../../UseContext/ContextProvider';
import { toast } from 'react-toastify';
const AllMatches = () => {
    const navigate = useNavigate()
    const [loading , setLoading] = useState(true)
    const { handleErrors ,categoryData, setCategoryData, PackageData, setPackageData,MatchesData, setMatchesData  } = useAppContext()
  
    useEffect(()=>{
        fetchData()
        if(categoryData.length==0){
            fetchCategories()
        }
        if(PackageData.length==0){
            fetchPackages()
        }
      },[])

      const fetchData = async () => {
        axiosInstance().get(`${URL}/event/all`)
        .then((res)=>{
            setLoading(false)
            const data = res.data.data;
            setMatchesData(data)
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


      const fetchCategories = async () => {
        axiosInstance().get(`${URL}/category/all`)
        .then((res)=>{
            const data = res.data.data;
            setCategoryData(data)
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

      const fetchPackages = async () => {
        axiosInstance().get(`${URL}/package/all`)
        .then((res)=>{
            const data = res.data.data;
            setPackageData(data)
        })
        .catch ((error)=> {
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

    return loading ? <Loader/> : (
        <div className='grid grid-cols-12 gap-y-10'>
            <div className='col-span-12'>
                <div className='flex justify-between items-center'>
                    <p className='headerText'>All Matches</p>
                    <PrimaryButton size='medium' onClick={()=>navigate('/match/create')}>Create Match</PrimaryButton>
                </div>
            </div>
            <div className='col-span-12'>
                {
                    MatchesData.length>0 ?
                    <div className='grid grid-cols-12 gap-5'>
                        {MatchesData?.map((item) => {
                            return (
                                <>
                                    <MatchCard
                                        key={item.id}
                                        data={item}
                                        fontSize='text-[12px]'
                                        width='large'
                                        overlay={true}
                                    />
                                </>
                            )
                        })}
                    </div>:
                    <div>
                         <h2 className='text-white text-center'>There are currently no matches available!</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default AllMatches
