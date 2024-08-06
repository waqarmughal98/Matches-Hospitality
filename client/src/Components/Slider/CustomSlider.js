// CustomSlider.js
import React, { useRef, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const CustomSlider = ({ slides, slidesToShow = 3, slidesToScroll = 1, infinite = false, speed = 500, responsive = [] }) => {
    const sliderRef = useRef(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    const settings = {
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        arrows: false,
        beforeChange: useCallback((current, next) => {
            setIsPrevDisabled(next === 0);
            setIsNextDisabled(next === slides.length - slidesToShow);
        }, [slides.length, slidesToShow]),
        afterChange: useCallback((index) => {
            setIsPrevDisabled(index === 0);
            setIsNextDisabled(index === slides.length - slidesToShow);
        }, [slides.length, slidesToShow]),
        responsive,
    };

    return (
        <div className='relative'>
            <div className='flex justify-end items-center pb-2'>
                <div
                    className={`p-2 cursor-pointer ${isPrevDisabled ? 'opacity-50 cursor-not-allowed text-gray-400' : 'text-primaryGreen'}`}
                    onClick={() => !isPrevDisabled && sliderRef.current.slickPrev()}
                >
                    <FaArrowLeftLong className={`text-xl ${isPrevDisabled ? 'text-gray-400' : 'text-primaryGreen'}`} />
                </div>
                <div
                    className={`p-2 cursor-pointer ${isNextDisabled ? 'opacity-50 cursor-not-allowed text-gray-400' : 'text-primaryGreen'}`}
                    onClick={() => !isNextDisabled && sliderRef.current.slickNext()}
                >
                    <FaArrowRightLong className={`text-xl ${isNextDisabled ? 'text-gray-400' : 'text-primaryGreen'}`} />
                </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className='px-2'>
                        {slide}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
