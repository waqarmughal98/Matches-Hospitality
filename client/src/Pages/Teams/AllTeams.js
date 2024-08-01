import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../UseContext/ContextProvider';
import { PrimaryButton } from '../../Components/UiElements/Buttons';
import TeamModal from '../../Components/Modal/Team/CreateTeamModal';
import CreateTeamModal from '../../Components/Modal/Team/CreateTeamModal';
const AllTeams = () => {
  const { showBackdropWithContent, closeModal } = useAppContext()

  const categoryData = [
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Formula 1',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Formula 1',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Formula 1',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      banner: 'assets/images/Category/category3.webp',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Formula 1',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text.'
    },
  ];



  const handleShowBackdrop = () => {
    const content = (
      <CreateTeamModal />
    )
    showBackdropWithContent(content)
  }

  return (
    <div className='grid grid-cols-12 gap-y-10'>
      <div className='col-span-12 text-white'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-3xl'>All Teams</h1>
          <PrimaryButton size='medium' onClick={handleShowBackdrop}>
            Create Team
          </PrimaryButton>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 gap-5'>
          {categoryData.map((item, index) => (
            <div key={index} className='group relative grid xl:col-span-3 md:col-span-12 col-span-12 items-center min-h-48 rounded-xl bg-cover bg-center border-primaryBorder border-[1px]'>
              <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent to-primaryGreen/10 group-hover:opacity-30 transition-opacity duration-100 ease-linear h-full w-full"></div>
              <div className='flex text-white gap-5 items-center p-6'>
                <img className='flex-shrink-0' src={item.logo} alt='logo' width={70} />
                <div className='flex flex-col'>
                  <p className='text-lg font-semibold'>{item.title}</p>
                  <p>{item.desc}</p>
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
