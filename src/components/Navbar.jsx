import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartImg, logoDark, userlogo } from '../assets/index'

const Navbar = () => {
  const productData = useSelector((state)=>state.shoperstop.productData);
  const userInfo = useSelector((state)=> state.shoperstop.userInfo);
    console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
        <div>
          <img className="w-41 h-80" src={logoDark} alt="logodark" />
        </div>
        </Link>
        <div  className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
        </ul>
        <Link to="/cart">
        <div className="relative">
          <img className="w-8 h-9" src={cartImg} alt="Cart" />
          <span className="absolute w-8 top-3 left-0 text-sm flex items-center justify-center font-semibold">{productData.length}</span>
        </div>
        </Link>
        <Link to="/Login">
        <img className="w-7 h-7" src={userlogo} alt="userlogo" />
        </Link>
        {
          userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
        }
      </div>
      </div>
    </div>
  )
}

export default Navbar
