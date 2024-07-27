import React from 'react'
import { PrimaryButton } from '../../Components/UiElements/Buttons'
import Packages from '../../Components/Dashboard/Packages'

const UserDashboard = () => {
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
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-12 text-3xl font-semibold'>Users</div>
        <div className='col-span-12'>
          <div className='grid grid-cols-12 gap-5'>
            {userData.map((item, index) => {
              return (
                <>
                  <div className='xl:col-span-3 md:col-span-6 col-span-12 rounded-2xl bg-primaryBlack border-primaryBorder border-[1px] p-5'>
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
                        <img src='assets/images/svgs/dashboard/user-icon.svg' />
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <Packages />
      </div>
    </div>
  )
}

export default UserDashboard
