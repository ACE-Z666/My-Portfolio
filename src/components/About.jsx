import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/anime'
import { useMediaQuery } from 'react-responsive'

const Desktop = () => {

  useGSAP (() => {
    animateWithGsap( '#title1', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut'

    })

    animateWithGsap('#my-pic', {
      scale: 1, opacity: 1, duration: 1, ease: 'ease-in'} ,{scrub: 5.5})

      animateWithGsap('#about-text1', {y: 0, 
        opacity: 1,
        ease: 'power2.inOut', duration: 1,
    })



  }, [])
  
  return (
    
    <div className=' h-full  about-section' id='About'>
      <div className='flex md:flex-row flex-col justify-center items-start sm:pb-12 sm:mx-48 mx-6 pr-4 content-layer'>
        <div className='text-white sm:pb-12  text-.5xl scale sm:text-2xl  sm:mr-0 sm:pr-0 sm:w-[250vh] w-[45vh] h-full '>
      <h1 id='title1' className='section-heading text-gray-200 sm:pb-16 sm:pt-36 pt-20 '>About Myself</h1>

<p id='about-text1' className='content-heading pb-8 mr-0 font-josefinsans overflow-hidden about-text sm:scale-100 text-0.5xl' style={{ lineHeight: '1.7' }}>I'm Abhijith J Nair, currently pursuing a Bachelor's in Computer Science and Engineering at Chengannur's College of Engineering. My passion lies at the intersection of front-end development, UI/UX design, and hardware analysis. Beyond coursework, I thrive on creating intuitive web experiences and actively engage in tech communities.
</p>
<p id='about-text1' className='content-heading mr-0 font-josefinsans overflow-hidden  about-text sm:scale-100 text-0.5xl' style={{ lineHeight: '1.7' }}>Beyond technology, I'm fluent in English, Hindi, Malayalam, and Tamil, facilitating effective communication across diverse teams and projects. My goal is to continue exploring new technologies, refining my craft, and contributing meaningfully to the ever-evolving world of software development and design. </p>
 </div>
        <div className='text-white sm:pt-20 sm:pb-12 items-center justify-center text-xl pl-24'>
        <div className='flex overflow-hidden'>
        <img src="./assets/my-pic.jpg" alt="Reload Page"  id="my-pic" className=' h-full sm:w-[1500px] about-img rounded-3xl' />
        
          
          </div>       
        </div>
        <div className='flex flex-col md:flex-col'>
        </div>

      </div>
    </div>
  )
}


const Mobile = () => {


  useGSAP (() => {
    animateWithGsap( '#title1', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.inOut'

    })

    animateWithGsap('#my-pic0', {
      scale: 1, opacity: 1, duration: 1, ease: 'ease-in'} ,{scrub: 5.5})

      animateWithGsap('#about-text1', {y: 0, 
        opacity: 1,
        ease: 'power2.inOut', duration: 1,
    })



  }, [])
  
  return (
    
    <div className=' h-full w-screen about-section mx-6 pr-0' id='About'>
      <h1 id='title1' className='section-heading text-gray-200  pt-20 '>About Myself</h1>
      <div className='flex md:flex-row flex-col justify-center items-center content-layer '>
      <div className=''>
        <img src="./assets/my-pic.jpg" alt="Reload Page"  id="my-pic0" className=' overflow-hidden w-1/2 about-img rounded-2xl mb-16' />            
          </div>       
        <div className='text-white sm:pb-12  text-.5xl overflow-hidden scale h-full pb-16 '>
<p id='about-text1' className='content-heading pb-8 mr-0 font-josefinsans overflow-hidden about-text sm:scale-100 text-0.5xl' style={{ lineHeight: '1.7' }}>I'm Abhijith J Nair, currently pursuing a Bachelor's in Computer Science and Engineering at Chengannur's College of Engineering. My passion lies at the front-end development, UI/UX design, and hardware analysis.
</p>
<p id='about-text1' className='content-heading mr-0 font-josefinsans overflow-hidden  about-text sm:scale-100 text-0.5xl' style={{ lineHeight: '1.7' }}>I am capable of  facilitating effective communication across diverse teams and projects. My goal is to continue exploring new technologies, refining my craft, and contributing meaningfully to the ever-evolving world of software development and design. </p>
 </div>
        <div className='text-white items-center justify-center text-xl pl-24'>
        
        </div>
        <div className='flex flex-col md:flex-col'>
        </div>

      </div>
    </div>
  )}



const About = () => {

  const isDesktop = useMediaQuery({minWidth: 768})
  return isDesktop ? <Desktop /> : <Mobile />;}

export default About
