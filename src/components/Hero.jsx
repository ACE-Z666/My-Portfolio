import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import DotLayer from './Dotlayer'
import { ReactTyped } from "react-typed";



const Hero = () => {

  useGSAP(() => {
   gsap.to('#hero', {opacity: 1, delay: 0.3, duration: 1}) ,
   gsap.to('#dde', {opacity: 1, y: -20, delay: 0.3 })
  }, [])
  
  return (

    <div  className='sm:h-[90vh] h-full sm:mx-48 mx-6'>
      <DotLayer></DotLayer>
      <div className="flex items-start justify-start h-full pb-96">
        <div className="text-start max-w-3xl mt-48">
        <h1 id='hero' className="text-5xl sm:text-8xl font font-thin text-white sm:mb-10 font-montserrat opacity-0 mb-12">Abhijith J Nair</h1>
          <div className=' items-center opacity-0 translate-y-20 pt-3' id='dde' >
            <p className="sm:text-2xl text-0.5xl text-gray-400 font-josefinsans sm:mb-8 sm:scale-100 scale:75 pr-6 " style={{ lineHeight: '1.7' }}>Student @ College of Engineering Chengannur, <br />Video Editor @ IEDC Bootcamp CEC, <br /> P.R.O @ PRODDEC CEC, <br /> Passionate in  <ReactTyped strings={['Web-Development', 'Cybersecurity', 'AI and ML', 'Software-Development','UI/UX Designing']} typeSpeed={80} backSpeed={100} loop className='sm:text-2xl text-0.5xl text-white font-josefinsans sm:scale-100 scale:75 pr-6'/> </p>
           
        <div className='flex gap-8 justify-start mt-3'>
          <a href="https://twitter.com/AbhijithJN96905?t=Ta5OpvOK7MBetzXmlABGcw&s=09"><FaXTwitter size={30} className='w-[20px] sm:w-[30px] hover:opacity-70' /></a>
        <a href="https://github.com/ACE-Z666"><FaGithub size={30} className='w-[20px] sm:w-[30px] hover:opacity-70' /></a>
        <a href="https://www.linkedin.com/in/abhijith-j-nair-0a373727b/" ><FaLinkedin size={30} className='w-[20px] sm:w-[30px] hover:opacity-70' /></a>
        </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Hero
