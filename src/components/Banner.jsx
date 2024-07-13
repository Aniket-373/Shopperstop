import React, { useState } from 'react'
import { bannerlogo, bannerlogo2 } from '../assets/index'
import {HiArrowLeft, HiArrowRight} from "react-icons/hi"

const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0)

    const data =[
        "https://cdn.dribbble.com/userupload/15259893/file/original-da2d5ba5df76c66b3678318da8192ed1.jpg?resize=1024x768&vertical=center",
        "https://cdn.dribbble.com/users/282315/screenshots/17501195/media/e21dfc4a458d8e4a2f3a115767e254c5.png?resize=1200x900&vertical=center",
        "https://cdn.dribbble.com/userupload/4879598/file/original-1078aa48e96aaf265348abe96091f1ce.png?resize=1024x768",
    ];

    const prevSlide = ()=>{
        setCurrentSlide(currentSlide===0?3:(prev)=>prev-1);
    }

    const nextSlide = ()=>{
        setCurrentSlide(currentSlide===3?0:(prev)=>prev+1);
    }

  return (
    <div className="w-full h-auto  overflow-hidden">
        <div className="w-screen h-[650px] relative">
            <div style={{transform: `translate(-${currentSlide * 100}vw)` }} 
                className="w-[400vw] h-full flex transition-transform duration-1000">
                <img className="w-screen h-full object-cover" src={bannerlogo} alt="banner" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[0]} alt="banner" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[1]} alt="banner" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[2]} alt="banner" loading="priority" />
            </div>
            <div className=" absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover: text-white active:bg-gray-900 duration-300" >
                <HiArrowLeft />
            </div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover: text-white active:bg-gray-900 duration-300" >
                <HiArrowRight />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
