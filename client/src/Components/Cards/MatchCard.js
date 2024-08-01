import React from 'react'
import { useAppContext } from '../../UseContext/ContextProvider';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import DeleteModal from '../Modal/DeleteModal';
import { useContext } from 'react';
import EditMatch from '../../Pages/Matches/EditMatch';
const MatchCard = ({ data, onClick, width, overlay }) => {
    const {showBackdropWithContent} = useAppContext()
    const handleShowBackdrop = () => {
        const content = (
          <EditMatch />
        )
        showBackdropWithContent(content)
      }
    const handleBackdrop = () => {
        const content = (
          <DeleteModal />
        )
        showBackdropWithContent(content)
      }
    const { selectedMatch } = useAppContext()
    const imageWidth = width === 'large' ? '60' : width === 'small' ? '50' : ''
    return (
        <div className={` ${width === 'small' ? 'xl:col-span-4' : 'xl:col-span-3'} group md:col-span-6 col-span-12 bg-[#141414] cursor-pointer rounded-xl px-4 py-6 text-white relative ${data.id == selectedMatch ? 'border-2 border-primaryGreen' : ''}`} onClick={onClick} >
            {overlay && (
                <div className='absolute opacity-0 h-0 group-hover:h-full group-hover:opacity-100 w-full backdrop-blur-xl top-0 left-0 transition-all duration-200 ease-linear rounded-xl flex items-center justify-center'>
                    <div className='flex items-center gap-x-3 rounded-md text-xs w-fit'>
                        <div className='flex gap-x-3 items-center border-borderInput border px-2 py-1 rounded-md cursor-pointer' onClick={handleShowBackdrop}>
                            Edit <MdOutlineEdit />
                        </div>
                        <div onClick={handleBackdrop} className='flex gap-x-1  items-center text-white bg-red-700 px-2 py-1 rounded-md cursor-pointer font-semibold'>
                            Delete <RiDeleteBinLine className='mt-[1px]' />
                        </div>
                    </div>
                </div>
            )}
            <div className='grid grid-cols-12 justify-center gap-y-2'>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src='/assets/images/package/LC.png' width={imageWidth} />
                        <p className='text-white font-semibold text-xs'>{data.teamA}</p>
                    </div>
                </div>
                <div className='col-span-6 grid items-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <p className={`${width === 'small' ? 'text-[13px]' : 'text-[12px]'} whitespace-nowrap font-semibold`}>UEFA Champions League </p>
                        <span>VS</span>
                        <div className='flex items-center gap-1'>
                            <div className='h-3 w-3 rounded-full bg-[#FF824D]'></div>
                            <span className='text-xs pr-2'>49:30</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src='/assets/images/package/chelsea.png' width={imageWidth} />
                        <p className='text-white font-semibold text-xs'>{data.teamB}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard
