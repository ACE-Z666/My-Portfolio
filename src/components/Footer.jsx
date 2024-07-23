import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Desktop = () => {
  return (
    <div  className='flex flex-col' id='Footer'>
    <div className='bg-[#000000] h-[25vh]'>
    <div className='flex flex-row justify-between items-start mx-48 border-t-2 border-gray-600'>
      <div className='mt-8'>
        <h1 className='text-gray-400 font-nycd text-3xl'>Abhijith JN</h1>
        <p className='text-gray-400 text-xs mt-6' style={{ lineHeight: '1.7' }}>Dedicated to crafting intuitive web experiences that are both visually appealing and highly functional,<br /> while continually exploring the intersection of cutting-edge technology and innovative design to create <br /> impactful digital solutions.</p>
        <div className='flex gap-8 justify-start mt-4'>
          <a href="https://twitter.com/AbhijithJN96905?t=Ta5OpvOK7MBetzXmlABGcw&s=09"><FaXTwitter size={25} className='w-[20px] opacity-80 sm:w-[30px] hover:opacity-70' /></a>
        <a href="https://github.com/ACE-Z666"><FaGithub size={25} className='w-[20px] sm:w-[30px] opacity-80 hover:opacity-70' /></a>
        <a href="https://www.linkedin.com/in/abhijith-j-nair-0a373727b/" ><FaLinkedin size={25} className='w-[20px] sm:w-[30px] opacity-80 hover:opacity-70' /></a>
        </div>

      </div>
      <div className='mt-8'>
        <h1 className='text-gray-400 font-montserrat text-3xl'>Contact</h1>
        <p className='text-gray-400 text-xs mt-6 ' style={{ lineHeight: '1.9' }}> +91 860 698 2351 <br /> abhijithjnair4321@gmail.com <br /> chn22csc110@ceconline.edu </p>

      </div>

      <div className='space-r-4 mt-8'>
        <h1 className='text-gray-400 font-montserrat text-3xl'>Other Links</h1>
        <p className='text-gray-400 text-xs mt-6 underline' style={{ lineHeight: '1.9' }}> College Of Engineering Chengannur <br /> IEDC Bootcamp CEC <br /> PRODDEC CEC </p>

      </div>

      

    </div>
      
    </div>
    <div className='bg-black h-[4vh]'>
       
    <div className='flex justify-center items-center mt-2  mx-48 h-[4vh]'>
    <p className='text-gray-400 text-xs'>© 2024 Abhijith J Nair. All rights reserved.</p> </div>

    </div>
    </div>
  )
}

const Mobile = () => {
  return (
    <div  className='flex flex-col mx-6 w-screen ' id='Footer'>
    <div className='bg-[#000000] h-full'>
    <div className='flex flex-col justify-center items-center border-t-2 border-gray-600 '>
      <div className='mt-8 justify-center items-center'>
        <h1 className='text-gray-400 font-nycd text-2xl text-center'>Abhijith JN</h1>
        <p className='text-gray-400 text-xs mt-4 text-center' style={{ lineHeight: '1.7' }}>Dedicated to crafting intuitive web experiences that are both visually appealing and highly functional, while continually exploring the intersection of cutting-edge technology and innovative design to create impactful digital solutions.</p>
        <div className='flex gap-8 justify-center mt-4 mb-3'>
          <a href="https://twitter.com/AbhijithJN96905?t=Ta5OpvOK7MBetzXmlABGcw&s=09"><FaXTwitter size={25} className='w-[20px] opacity-80 sm:w-[30px] hover:opacity-70' /></a>
        <a href="https://github.com/ACE-Z666"><FaGithub size={25} className='w-[20px] sm:w-[30px] opacity-80 hover:opacity-70' /></a>
        <a href="https://www.linkedin.com/in/abhijith-j-nair-0a373727b/" ><FaLinkedin size={25} className='w-[20px] sm:w-[30px] opacity-80 hover:opacity-70' /></a>
        </div>

      </div>
      <div className='mt-8'>
        <h1 className='text-gray-400 font-montserrat text-2xl text-center'>Contact</h1>
        <p className='text-gray-400 text-xs mt-3 text-center ' style={{ lineHeight: '1.9' }}> +91 860 698 2351 <br /> abhijithjnair4321@gmail.com <br /> chn22csc110@ceconline.edu </p>

      </div>

      <div className='space-r-4 mt-8'>
        <h1 className='text-gray-400 font-montserrat text-2xl text-center'>Other Links</h1>
        <p className='text-gray-400 text-xs mt-3 underline text-center' style={{ lineHeight: '1.9' }}> College Of Engineering Chengannur <br /> IEDC Bootcamp CEC <br /> PRODDEC CEC </p>

      </div>

      

    </div>
      
    </div>
    <div className='bg-black h-[4vh] w-screen'>
       
    <div className=' text-center mt-8 h-[4vh] '>
    <p className='text-gray-400 text-xs'>© 2024 Abhijith J Nair. All rights reserved.</p> </div>

    </div>
    </div>
  
  )
}


const Footer = () => {

  const isDesktop = useMediaQuery({minWidth: 768})
  return isDesktop ? <Desktop /> : <Mobile />;}

export default Footer
