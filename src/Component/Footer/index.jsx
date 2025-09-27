import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <footer className='relative py-12 lg:pt-[100px] lg:pb-[200px]'>
        <div className="container">
          <div className="w-full mb-5 md:mb-8"><img src="/logo.svg" alt="" className='m-auto w-[200px] lg:w-[300px]' /></div>
          <h3 className='text-center font-["Poppins"] font-[300] uppercase tracking-[0.539881px] text-[16px] leading-[22px] text-[#CBA86B] mb-5 md:text-[32px] md:leading-[45px] md:max-w-[960px] md:m-auto'>LET US HELP YOU ACHIEVE YOUR BUSINESS GOALS AND CREATE
UNFORGETTABLE EXPERIENCES FOR YOUR GUESTS</h3>
          <hr className='border-[#C4996B] border-0 border-b-[1px] my-3.5 md:my-14' />
          <h6 className="text-center text-white uppercase tracking-[1px] text-[16px]">Let's Connect</h6>
          <ul className='flex flex-col justify-center items-center gap-4 mt-5 mb-7 md:flex-row md:gap-[60px] md:mt-46px md:mb-[72px]'>
            <li className='flex justify-start items-center w-fit'><MdOutlineEmail className='mr-3' /> <a href="mailto:youremail@gmail.com" className='hover:text-[#CBA86B]'>youremail@gmail.com</a></li>
            <li className='flex justify-start items-center w-fit'><FaPhoneVolume className='mr-3' /> <a href="tell:(312)-375-4199" className='hover:text-[#CBA86B]'>(312) 375-4199</a></li>
            <li className='flex justify-start items-center w-fit'><FaMapLocationDot className='mr-3' /> Dubai, UAE</li>
          </ul>
          <ul className='flex justify-center gap-3.5 mb-5'>
            <li><a href="#" className='w-[40px] h-[40px] border-0[1px] border-[#fff] border-[1px] flex justify-center items-center rounded-[100%] hover:text-[#CBA86B] hover:border-[#CBA86B]'><FaFacebookF className='w-[16px]' /></a></li>
            <li><a href="#" className='w-[40px] h-[40px] border-0[1px] border-[#fff] border-[1px] flex justify-center items-center rounded-[100%] hover:text-[#CBA86B] hover:border-[#CBA86B]'><FaInstagram className='w-[16px]' /></a></li>
            <li><a href="#" className='w-[40px] h-[40px] border-0[1px] border-[#fff] border-[1px] flex justify-center items-center rounded-[100%] hover:text-[#CBA86B] hover:border-[#CBA86B]'><FaLinkedinIn className='w-[16px]' /></a></li>
            <li><a href="#" className='w-[40px] h-[40px] border-0[1px] border-[#fff] border-[1px] flex justify-center items-center rounded-[100%] hover:text-[#CBA86B] hover:border-[#CBA86B]'><FaYoutube className='w-[16px]' /></a></li>
          </ul>
          <pre className='font-["Montserrat"] text-center text-[14px] leading-[29px] tracking-[1px] text-white'>Copyright © 2025 | <a href="#" className='text-red hover:text-[#CBA86B]'>Privacy Policy</a></pre>
        </div>
        <img src="/footerbg.png" alt="" className='mb-0 w-full h-full object-cover absolute top-0 left-0 z-[-1]' />
      </footer>
    </>
  )
}

export default footer
