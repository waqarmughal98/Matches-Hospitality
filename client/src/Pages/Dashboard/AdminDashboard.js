import React from 'react'
import Packages from '../../Components/Dashboard/Packages'
import Revenue from '../../Components/Dashboard/Revenue'

const AdminDashboard = () => {
  const userData = [
    {
      users: 'Total User',
      numberOfUsers: '54,272'
    },
    {
      users: 'Total User',
      numberOfUsers: '12,098'
    },
    {
      users: 'Total User',
      numberOfUsers: '23,765'
    },
    {
      users: 'Total User',
      numberOfUsers: '98,656'
    }
  ]
  return (
    <div className='text-white'>
      <div className='grid grid-cols-12 lg:gap-x-10 gap-y-8'>
        <div className='col-span-12'>
          <div className='grid grid-cols-12 lg:gap-x-8 gap-y-8'>
            <div className='col-span-12 text-3xl font-semibold'>Users</div>
            <div className='col-span-12'>
              <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5'>
                {userData.map((item, index) => {
                  return (
                    <>
                      <div key={index} className='xl:col-span-3 md:col-span-6 col-span-12 rounded-2xl bg-primaryBlack border-primaryBorder border-[1px] p-5'>
                        <div className='grid grid-cols-12'>
                          <div className='col-span-10'>
                            <div className='flex flex-col gap-3'>
                              <span className='text-base font-semibold'>{item.users}</span>
                              <span className='text-4xl font-semibold'>{item.numberOfUsers}</span>
                              <div className='flex gap-2'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#00B69B" />
                                </svg>
                                <span className='text-[#00B69B]'>8.5%</span>
                                <span>
                                  Up from yesterday
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className='grid col-span-2 items-end justify-end'>
                            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.842657" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V51C0 55.9706 4.02944 60 9 60H30H51C55.9706 60 60 55.9706 60 51V30V9C60 4.02944 55.9706 0 51 0H30H9C4.02944 0 0 4.02944 0 9V30Z" fill="#88F67E" />
                              <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M20.6667 23.3333C20.6667 26.2789 23.0545 28.6667 26 28.6667C28.9455 28.6667 31.3333 26.2789 31.3333 23.3333C31.3333 20.3878 28.9455 18 26 18C23.0545 18 20.6667 20.3878 20.6667 23.3333ZM34 28.6667C34 30.8758 35.7909 32.6667 38 32.6667C40.2091 32.6667 42 30.8758 42 28.6667C42 26.4575 40.2091 24.6667 38 24.6667C35.7909 24.6667 34 26.4575 34 28.6667Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9778 31.3335C19.6826 31.3335 14.5177 34.5689 14.0009 40.9324C13.9727 41.2791 14.6356 42.0002 14.97 42.0002H36.9956C37.9972 42.0002 38.0128 41.1941 37.9972 40.9335C37.6065 34.3911 32.3616 31.3335 25.9778 31.3335ZM45.2746 42.0002L40.1333 42.0002C40.1333 38.9989 39.1417 36.2293 37.4683 34.001C42.0103 34.0506 45.7189 36.347 45.998 41.2002C46.0092 41.3956 45.998 42.0002 45.2746 42.0002Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </>
                  )
              })}
            </div>
          </div>
          </div>
        </div>
        <Packages />
        <Revenue />
      </div>
    </div>
  )
}

export default AdminDashboard
