import React from 'react'
import '../../App.css'
const Loader = () => {
  return (
    <div className='w-full min-h-screen -mt-36 flex justify-center items-center'>
        <div className="spinner-container flex flex-col gap-3 justify-center items-center">
           <div className="loading-spinner"></div>
           <h3 className='text-white'>Fetching Data...</h3>

        </div>
    </div>
  )
}

export default Loader