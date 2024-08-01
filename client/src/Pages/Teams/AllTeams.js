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
  const { showBackdropWithContent, closeModal , handeErrors } = useAppContext()
  const navigate = useNavigate()
  const [loading , setLoading] = useState(true)
  const [TeamData, setTeamData] = useState([])
  const [updation , setUpdation] = useState()
  useEffect(()=>{
    fetchData()
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
            navigate("/Login")
        }else{
            handeErrors(error)
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
  
  const handleBackdrop= (id) => {
    const content = (
      <DeleteModal setTeamData={setTeamData} selectedItemID={id}/>
    )
    showBackdropWithContent(content)
  }

  return loading ? <Loader/> : (
    <div className='grid grid-cols-12 gap-y-10'>
      <div className='col-span-12 text-white'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-3xl'>All Teams</h1>
          <PrimaryButton size='medium' onClick={handleCreateBackdrop}>
            Create Team
          </PrimaryButton>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 gap-5'>
          {TeamData.map((item, index) => (
            <div key={index} className='group relative grid xl:col-span-3 md:col-span-12 col-span-12 items-center min-h-44 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]'>
              <div className='flex text-white gap-5 items-center justify-center'>
                <div className='h-16 w-16 relative'>
                <img className='flex-shrink-0 absolute h-full w-full' src={`/uploads/${item.logo}`} alt='logo' width={70} />
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
