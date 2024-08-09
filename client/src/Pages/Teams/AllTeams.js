import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import EditTeamModal from '../../Components/Modal/Team/EditTeamModal';
import DeleteModal from '../../Components/Modal/DeleteModal';
import { axiosInstance, StorageURL, URL } from '../../utilities/ConstantData';
import Loader from '../../Components/UiElements/Loader';
import { toast } from 'react-toastify';
import CreateTeamModal from '../../Components/Modal/Team/CreateTeamModal';
const AllTeams = () => {
  const { showBackdropWithContent,setCategoryData, handleErrors, closeModal } = useAppContext()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [TeamData, setTeamData] = useState([])
  const [updation, setUpdation] = useState()
  useEffect(() => {
    fetchData()
    fetchCategories()
  }, [updation])

  const fetchData = async () => {
    axiosInstance().get(`${URL}/team/all`)
      .then((res) => {
        setLoading(false)
        const data = res.data.data;
        setTeamData(data)
      })
      .catch((error) => {
        setLoading(false)
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

  const fetchCategories = async () => {
    axiosInstance().get(`${URL}/category/all`)
      .then((res) => {
        const data = res.data.data;
        setCategoryData(data)
      })
      .catch((error) => {
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

  const handleEditShowBackdrop = (item) => {
    const content = (
      <EditTeamModal selectedItem={item} setUpdation={setUpdation} />
    )
    showBackdropWithContent(content)
  }

  const handleCreateBackdrop = () => {
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
      .then((res) => {
        filterCategory(id)
        closeModal()
        toast.success("Team and associated events deleted successfully")
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


  const handleBackdrop = (id) => {
    const content = (
      <DeleteModal handleDelete={handleDelete} item="team" id={id} />
    )
    showBackdropWithContent(content)
  }

  return loading ? <Loader /> : (
    <div className='grid grid-cols-12 gap-y-10'>
      <div className='col-span-12 text-white'>
        <div className='flex justify-between items-center'>
          <h1 className='headerText'>All Teams</h1>
          <PrimaryButton size='medium' onClick={handleCreateBackdrop}>
            Create New Team
          </PrimaryButton>
        </div>
      </div>
      <div className='col-span-12'>
        {
          TeamData.length>0 ?
          <div className='grid grid-cols-12 gap-7'>
            {TeamData.map((item, index) => (
              <div key={index} className='group relative text-white grid xl:col-span-3 md:col-span-12 col-span-12 items-center min-h-44 rounded-xl bg-cover bg-center border-primaryBorder border-[1px] bg-gradient-to-t from-primaryGreen/10 py-5 to-transparent'>
                <div className='flex items-center justify-center gap-x-3'>
                  <div className='h-[7rem] w-[7rem] relative flex justify-center items-center'>
                    <img className='flex-shrink-0 object-scale-down absolute h-full w-full border border-borderInput/20 rounded-lg backdrop-blur-3xl' src={`${StorageURL}/${item.logo}`} alt='logo' width={70} />
                  </div>
                  <div className='flex flex-col items-center gap-y-2'>
                    <div className='flex flex-col items-center'>
                      <p className='text-lg font-semibold'>{item.name || ""}</p>
                      <p className='text-sm'>{item.categoryName || ""}</p>
                    </div>
                    <div className='flex items-center gap-x-3 py-1 rounded-md text-xs w-fit'>
                      <div className='flex gap-x-2 items-center border-borderInput border px-2 py-1 rounded-md cursor-pointer' onClick={() => handleEditShowBackdrop(item)}>
                        Edit <MdOutlineEdit />
                      </div>
                      <div onClick={() => handleBackdrop(item._id)} className='flex gap-x-1  items-center text-white bg-red-700 px-2 py-1 rounded-md cursor-pointer font-semibold'>
                        Delete <RiDeleteBinLine className='mt-[1px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>:
          <div>
            <h2 className='text-white text-center'>There are currently no teams available!</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default AllTeams
