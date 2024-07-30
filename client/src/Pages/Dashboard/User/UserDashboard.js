import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserDashboard = () => {
  const data = [
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      banner: 'assets/images/userdashboard/event1.jpg',
      title: 'Aafcon',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      banner: 'assets/images/userdashboard/event2.jpg',
      title: 'Formula 1',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      banner: 'assets/images/userdashboard/event1.jpg',
      title: 'Soccer',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      logo: 'assets/images/userdashboard/event-logo2.png',
      banner: 'assets/images/userdashboard/event3.jpg',
      title: 'Basketball',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ];



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12'>
        <div className='slider-container'>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className='px-2'>
                <div className='min-h-56 rounded-cardRadius bg-cover bg-center' style={{ backgroundImage: `url(${item.banner})` }}>
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
