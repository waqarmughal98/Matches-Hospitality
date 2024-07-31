import React from 'react'
import { useAppContext } from '../../UseContext/ContextProvider';
const MatchCard = ({ data , onClick , fontSize , width}) => {
    const {selectedMatch} = useAppContext()

    return (
        <div className={` xl:col-span-3 md:col-span-6 col-span-12 bg-[#141414] rounded-xl px-4 py-6 text-white ${data.id == selectedMatch  ? 'border-2 border-primaryGreen' : 'border-2 border-transparent'}`} onClick={onClick} >
            <div className='grid grid-cols-12 justify-center gap-y-2'>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src='/assets/images/package/LC.png' width={`${width}`} />
                        <p className='text-white font-semibold text-xs'>{data.teamA}</p>
                    </div>
                </div>
                <div className='col-span-6 grid items-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <p className={`${fontSize} text-[10px] whitespace-nowrap font-semibold`}>UEFA Champions League </p>
                        <span>VS</span>
                        <div className='flex items-center gap-1'>
                            <div className='h-3 w-3 rounded-full bg-[#FF824D]'></div>
                            <span className='text-xs pr-2'>49:30</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src='/assets/images/package/chelsea.png' width={`${width}`} />
                        <p className='text-white font-semibold text-xs'>{data.teamB}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard
