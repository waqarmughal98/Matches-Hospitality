import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import EditTeamModal from '../../Components/Modal/Team/EditTeamModal';
import DeleteModal from '../../Components/Modal/DeleteModal';
import { axiosInstance, URL } from '../../utilities/ConstantData';
import Loader from '../../Components/UiElements/Loader';
import { toast } from 'react-toastify';
import CreateTeamModal from '../../Components/Modal/Team/CreateTeamModal';
const AllTeams = () => {
  const { showBackdropWithContent, categoryData, setCategoryData , handleErrors , closeModal} = useAppContext()
  const navigate = useNavigate()
  const [loading , setLoading] = useState(true)
  const [TeamData, setTeamData] = useState([])
  const [updation , setUpdation] = useState()
  useEffect(()=>{
    fetchData()
    if(categoryData.length==0){
      fetchCategories()
    }
  },[updation])

  const fetchData = async () => {
    axiosInstance().get(`${URL}/team/all`)
    .then((res)=>{
        setLoading(false)
        const data = res.data.data;
        setTeamData(data)
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

  const handleEditShowBackdrop = (item) => {
    const content = (
      <EditTeamModal selectedItem={item} setUpdation={setUpdation} />
    )
    showBackdropWithContent(content)
  }

  const handleCreateBackdrop = ()=>{
    const content = (
      <CreateTeamModal setTeamData={setTeamData} />
    )
    showBackdropWithContent(content)
  }
  const filterCategory = (id) => {
    setTeamData(prevData => prevData.filter(team => team._id !== id));
};

const handleDelete = async (id) => {
    axiosInstance().delete(`${URL}/team/delete/${id}`)
    .then((res)=>{
        filterCategory(id)
        closeModal()
        toast.success("Team deleted successfully")
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

  
  const handleBackdrop= (id) => {
    const content = (
      <DeleteModal handleDelete={handleDelete} item="team" id={id}/>
    )
    showBackdropWithContent(content)
  }

  return loading ? <Loader/> : (
    <div className='grid grid-cols-12 gap-y-10'>
      <div className='col-span-12 text-white'>
        <div className='flex justify-between items-center'>
          <h1 className='headerText'>All Teams</h1>
          <PrimaryButton size='medium' onClick={handleCreateBackdrop}>
            Create Team
          </PrimaryButton>
        </div>
      </div>
      <div className='col-span-12 font-roboto'>
        <div className='grid grid-cols-12 gap-5'>
          {TeamData.map((item, index) => (
            <div key={index} className='group relative grid xl:col-span-3 md:col-span-12 col-span-12 items-center min-h-44 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]'>
              <div className='flex text-white gap-5 items-center justify-center'>
                <div className='h-[7rem] w-[7rem] relative '>
                <img className='flex-shrink-0 object-scale-down absolute h-full w-full' src={`/uploads/${item.logo}`} alt='logo' width={70} />
                </div>
                <div className='flex flex-col gap-y-3'>
                  <div className='flex flex-col'>
                    <p className='text-lg font-semibold'>{item.name || ""}</p>
                    <p>{item.categoryName || ""}</p>
                  </div>
                  <div className='flex items-center gap-x-3 py-1 rounded-md text-xs w-fit'>
                    <div className='flex gap-x-3 items-center border-borderInput border px-2 py-1 rounded-md cursor-pointer' onClick={()=>handleEditShowBackdrop(item)}>
                      Edit <MdOutlineEdit />
                    </div>
                    <div onClick={()=>handleBackdrop(item._id)} className='flex gap-x-1  items-center text-white bg-red-700 px-2 py-1 rounded-md cursor-pointer font-semibold'>
                      Delete <RiDeleteBinLine className='mt-[1px]' />
                    </div>
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

export default AllTeams
