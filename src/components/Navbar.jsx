import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
import { useEffect } from 'react'


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleNav = () => setNav(!nav);

  useGSAP(() => {
    gsap.fromTo('.content-layer', {opacity: 0}, {opacity: 1, duration: 1.5})
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed w-screen z-50 justify-center rounded-b-lg rounded-l-lg bg-black bg-opacity-80 backdrop-blur-60 transition-all duration-300 py-5 ${shrink ? 'sm:h-[vh] sm:mt-0' : 'sm:h-[10vh] sm:mt-16'}`}>
      <div className='content-layer text-gray-400 flex sm:justify-between sm:scale-100 scale-90 sm:mx-48'>
        <Link  to="Hero" spy={true} smooth={true} offset={-50}><h1 className='text-xl bg-transparent font-nycd text-white hover:text-gray-400 transition-all '>A JN</h1></Link>
        <ul className="hidden md:flex justify-center gap-10">
        <li className="cursor-pointer font-monserrat hover:text-white transition-all ">
              <Link to="Projects" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Projects</Link>
            </li>
            <li className="cursor-pointer font-monserrat hover:text-white transition-all ">
              <Link to="About" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">About</Link>
            </li>
            <li className="cursor-pointer font-monserrat hover:text-white transition-all ">
              <Link to="Footer" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Contact</Link>
          </li>
          <li className="cursor-pointer font-monserrat hover:text-white transition-all ">
              <a href="https://docs.google.com/document/d/e/2PACX-1vRgdnmoR2Ynzr343SwAABGycUMkcpziEga6Yzix--kUt4Nep-JM32fHqR7j-hU9dAUrVUxp_MX0P7cL/pub" className="text-xl px-4 py-4 font-semibold">Resume</a>
            </li>

        </ul>

        <div onClick={handleNav} className='fixed cursor-pointer pb-4 pt-1 ml-[95%] block md:hidden z-50' aria-label="Toggle menu">
          {nav ? <TfiClose size={25} onClick={handleNav} color='white' /> : <TfiMenuAlt size={25} color='white' onClick={handleNav} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-black bg-opacity-80 backdrop-blur-60 ease-in-out duration-500' : ' border-r border-r-gray-900 ease-in-out duration-500 fixed left-[-100%]'}>
          <div>
          <ul className='my-16 mx-2 space-y-10'><h1 className='text-xl font-nycd text-white'>A JN</h1>
            <li className="cursor-pointer p-2 border-b border-gray-500 font-monserrat hover:text-white transition-all uppercase">
              <Link to="Projects" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Projects</Link>
            </li>
            <li className="cursor-pointer p-2 border-b border-gray-500 font-monserrat hover:text-white transition-all uppercase">
              <Link to="About" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">About</Link>
            </li>
            <li className="cursor-pointer p-2 border-b border-gray-500 font-monserrat hover:text-white transition-all uppercase">
              <a href="https://docs.google.com/document/d/e/2PACX-1vRgdnmoR2Ynzr343SwAABGycUMkcpziEga6Yzix--kUt4Nep-JM32fHqR7j-hU9dAUrVUxp_MX0P7cL/pub" className="text-xl px-4 py-4">Resume</a>
            </li>
            <li className="cursor-pointer p-2 border-b border-gray-500 font-monserrat hover:text-white transition-all uppercase">
              <Link to="Footer" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
