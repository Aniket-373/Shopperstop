import React from 'react'
import { BsPaypal, BsPersonFill } from 'react-icons/bs'
import {
    FaFacebookF,
    FaHome,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'
import { logoLight, paymentsLogo } from '../assets/index'

const Footer = () => {
  return (
    <div className="bg-black text-[#494949] py-20 font-titleFont">
     <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-9 mx-10">
         <img className="w-36 h-70 -mt-20 " src={logoLight} alt="logolight" />
         <p className="text-white text-sm tracking-wide -mt-20 mx-4">@Aniket.Bhoir.com</p>
         <img className="w-56 -mt-16 -mx-12" src={paymentsLogo} alt="paymentlogo" />
         <div className="flex gap-1 text-md text-gray-400 -mt-28 mx-4">
            <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
            <FaTwitter  className="hover:text-white duration-300 cursor-pointer"/>
            <FaInstagram  className="hover:text-white duration-300 cursor-pointer"/>
            <FaYoutube  className="hover:text-white duration-300 cursor-pointer"/>
            <FaHome  className="hover:text-white duration-300 cursor-pointer"/>
         </div>
        </div>
            <div className="-mt-5">
            <h2 className="text-2x1 font-semibold text-white mb-4">Locate Us</h2>
            <div className="text-base flex flex-col gap-2">
                <p>Mumbai,Maharashtra.</p>
                <p>PhoneNo: 9665308209</p>
                <p>E-mail: aniketbhoir373@gmail.com </p>
            </div>
            </div>
            <div  className="flex items-center gap-3">
            <div className="-mt-5">
                <h2 className="text-2x1 font-semibold text-white mb-4">Profile</h2>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPersonFill/></span>my account</p>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPaypal/></span>checkout</p>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><FaHome/></span>order tracking</p>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><MdLocationOn/></span>help & support</p>
            </div>
            </div>
            <div className="flex flex-col justify-center">
                <input  className=" bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" type="E-mail" />
                <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
            </div>
     </div>
    </div>
  )
}

export default Footer
