import React from 'react'
import { useAppContext } from '../../UseContext/ContextProvider';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import DeleteModal from '../Modal/DeleteModal';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, URL } from '../../utilities/ConstantData';
import { toast } from 'react-toastify';
const MatchCard = ({ data, onClick, width, overlay }) => {
    const {showBackdropWithContent,convertToAmPm,convertToDateFormat,setSelectedEditMatch,closeModal,handleErrors,setMatchesData} = useAppContext()
    const navigate=useNavigate()
    const handleShowBackdrop = () => {
        setSelectedEditMatch(data)
         navigate("/match/edit")
      }

      const filterCategory = (id) => {
        setMatchesData(prevData => prevData.filter(team => team._id !== id));
    };
    
    const handleDelete = async (id) => {
        axiosInstance().delete(`${URL}/event/delete/${id}`)
        .then((res)=>{
            filterCategory(id)
            closeModal()
            toast.success("Match deleted successfully")
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

    const handleBackdrop = () => {
        const content = (
          <DeleteModal handleDelete={handleDelete}  item="match" id={data._id} />
        )
        showBackdropWithContent(content)
      }
    const { selectedMatch } = useAppContext()
    const imageWidth = width === 'large' ? '60' : width === 'small' ? '50' : ''
    return (
        <div className={` ${width === 'small' ? 'xl:col-span-4' : 'xl:col-span-3'} group md:col-span-6 col-span-12 bg-[#141414] cursor-pointer rounded-xl px-4 py-6 text-white relative font-roboto ${data.id == selectedMatch ? 'border-1 border-primaryGreen' : ''}`} onClick={onClick} >
            {overlay && (
                <div className='absolute opacity-0 h-0 group-hover:h-full group-hover:opacity-100 w-full backdrop-blur-xl top-0 left-0 transition-all duration-200 ease-linear rounded-xl flex items-center justify-center'>
                    <div className='flex items-center gap-x-3 rounded-md text-xs w-fit'>
                        <div className='flex gap-x-3 items-center border-borderInput border px-2 py-1 rounded-md cursor-pointer' onClick={()=>handleShowBackdrop()}>
                            Edit <MdOutlineEdit />
                        </div>
                        <div onClick={()=>handleBackdrop()} className='flex gap-x-1  items-center text-white bg-red-700 px-2 py-1 rounded-md cursor-pointer font-semibold'>
                            Delete <RiDeleteBinLine className='mt-[1px]' />
                        </div>
                    </div>
                </div>
            )}
            <div className='grid grid-cols-12 justify-center gap-y-2'>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src={`/uploads/${data?.team1?.logo}`} alt='logo' width={imageWidth} />
                        <p className='text-white font-semibold text-xs'>{data?.team1?.name}</p>
                    </div>
                </div>
                <div className='col-span-6 grid items-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <p className={`${width === 'small' ? 'text-[13px]' : 'text-[12px]'} whitespace-nowrap font-semibold`}>{data.category.name} </p>
                        <span>VS</span>
                        <div className='flex items-center gap-1'>
                            <div className='h-3 w-3 rounded-full bg-[#FF824D]'></div>
                            <span className='text-xs pr-2 font-jumper'>{convertToAmPm(data.time)}</span>
                        </div>
                        <span className='text-xs pr-2 font-jumper'>{convertToDateFormat(data.date)}</span>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src={`/uploads/${data?.team2?.logo}`} alt='logo' width={imageWidth} />
                        <p className='text-white font-semibold text-xs'>{data?.team2?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard
