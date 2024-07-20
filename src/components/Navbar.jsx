import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Navbar = () => {

  useGSAP(() => {
    gsap.fromTo('.content-layer', {opacity: 0}, {opacity: 1, duration: 1.5})
  }, [])

  return (
    <div className=' content-layer text-gray-400 flex sm:justify-end pt-8 sm:pt-16 sm:scale-100 scale-90 content-layer mx-48'>
        <ul className="flex justify-center gap-10">
           <a href="https://linktr.ee/abhijith_j_nair"> <li className='cursor-pointer font-monserrat hover:text-white transition-all'>Projects</li></a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vRgdnmoR2Ynzr343SwAABGycUMkcpziEga6Yzix--kUt4Nep-JM32fHqR7j-hU9dAUrVUxp_MX0P7cL/pub"><li className='cursor-pointer font-monserrat hover:text-white transition-all'>Resume</li></a>
            <li className='cursor-pointer font-monserrat hover:text-white transition-all'>Contact</li>
            </ul>
</div>  )
}

export default Navbar
