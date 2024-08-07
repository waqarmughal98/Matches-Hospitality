// UserDashboard.js
import React from 'react';
import event1 from '../../../../src/assets/images/userdashboard/event1.jpg';
import event2 from '../../../../src/assets/images/userdashboard/event2.jpg';
import event3 from '../../../../src/assets/images/userdashboard/event3.jpg';
import CustomSlider from '../../../Components/Slider/CustomSlider';

const slidesData = [
  {
    logo: 'assets/images/userdashboard/event-logo2.png',
    banner: event1,
    title: 'Aafcon',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    logo: 'assets/images/userdashboard/event-logo2.png',
    banner: event2,
    title: 'Formula 1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    logo: 'assets/images/userdashboard/event-logo2.png',
    banner: event3,
    title: 'Soccer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    logo: 'assets/images/userdashboard/event-logo2.png',
    banner: event1,
    title: 'Basketball',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const slides = slidesData.map((item, index) => (
  <div key={index} className='min-h-56 rounded-xl bg-cover bg-center border border-borderInput' style={{ backgroundImage: `url(${item.banner})` }}>
    <div className='flex items-end h-full p-5 text-white'>
      <div className='flex flex-col gap-y-5'>
        <img src={item.logo} alt='logo' width={40} />
        <div>
          <p className='font-semibold text-lg'>{item.title}</p>
          <p className='w-2/4 text-sm'>{item.desc}</p>
        </div>
      </div>
      <div className='h-6 w-6 flex-shrink-0 rounded-full bg-primaryGreen flex justify-center items-center'>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3333 5.00912L6.61508 9.88886H5.04037L9.18868 5.60689H0.222229V4.39306H9.18868L5.04037 0.111084H6.61508L11.3333 5.00912Z" fill="black" />
        </svg>
      </div>
    </div>
  </div>
));

const UserDashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12'>
        <CustomSlider
          slides={slides}
          slidesToShow={3}
          slidesToScroll={1}
          infinite={false}
          speed={500}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
