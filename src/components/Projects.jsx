import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/anime';





const Desktop = () => {

    useGSAP (() => {
        animateWithGsap( '#title', {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.inOut'
    
        })    

        animateWithGsap('#my-pic', {
            scale: 1, opacity: 1, duration: 1, ease: 'power1'} ,{scrub: 5.5})
      

        animateWithGsap('#projects1-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 1,
        })

        animateWithGsap('#projects2-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 0.6,
        })

        animateWithGsap('#projects3-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 0.6,
        })
    
      }, [])
     
    return (

        <div id='Projects' className='bg-[#0b0b0b]'>
    
    <div className='h-full flex flex-col justify-start items-start content-layer mx-48 '>
     <h1 id='title' className='projects2-text text-gray-200 sm:pt-20 pt-1 lg:text-8xl md:text-5xl text-5xl lg:mb-0 mb-12 font-josefinsans'>Projects</h1>
        <div className='flex flex-row justify-start items-center pb-32'>
            <div className='mt-0'>

                 <p id='projects2-text' style={{ lineHeight: '1.7' }} className='mt-12 items-start pr-20 content-heading pb-8 font-josefinsans overflow-hidden projects2-text sm:text-xl sm:scale-100 text-0.5xl '>
                 This project is a clone of the iPhone page from Apple, showcasing a detailed and visually appealing design using Three.js and modern web development techniques. It replicates the smooth transitions, animations, and high-quality visuals of the original page.
                 <br /> Link: <a href="https://iphone-3js-project.vercel.app/" className='text-blue-500'>iphone-3js-project.vercel.app</a>
                 </p>
            </div>
            <div>
            <img src="./assets/i-c-p.png" alt="Reload Page"  id="my-pic" className=' rounded-2xl w-[1100px] about-img' />
            </div>

        </div>
        <div className='flex flex-row justify-start items-center pb-32'>
            <div>
            <img src="./assets/s-b-s.png" alt="Reload Page"  id="my-pic" className=' rounded-2xl w-[1100px] about-img ' />
            </div>
            <div>
            <p id='projects1-text' style={{ lineHeight: '1.7' }} className=' pl-24 content-heading pb-8 mr-0 font-josefinsans overflow-hidden projects1-text sm:text-xl sm:scale-100 text-0.5xl '>
            Eclipso is a comprehensive web hosting platform designed to provide users with an efficient, reliable, and easy-to-use interface for managing their websites. This project focuses on delivering top-notch performance and scalability.
            <br /> Link: <a href="https://eclipso.vercel.app/" className='text-blue-500'>eclipso.vercel.app</a>
                 </p>

            </div>

        </div>
        <div className='flex flex-row justify-start items-center pb-8 mb-48'>
            <div>
                  <p id='projects3-text' style={{ lineHeight: '1.7' }} className=' pr-20 content-heading pb-8 mr-0 font-josefinsans overflow-hidden projects2-text sm:text-xl sm:scale-100 text-0.5xl'>It is a project done on HTML and Spline where i created a 3D presentation of a Youtube Educator "Anna Thomas " as a token of appreciation for participating in a talk session conducted by IEDC Bootcamp CEC. ber
                  <br /> Link: <a href="https://talk-session-p.vercel.app/" className='text-blue-500'>talk-session-p.vercel.app</a>
                  </p>
            </div>
            <div>
            <img src="./assets/t-s.png" alt="Reload Page"  id="my-pic" className='rounded-2xl  w-[1000px] about-img ' />
            </div>

        </div>
      
    </div>
    </div>
  );
};


  const Mobile = () => {

    useGSAP (() => {
        animateWithGsap( '#title', {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.inOut'
    
        })    

        animateWithGsap('#my-pic', {
            scale: 1, opacity: 1, duration: 1, ease: 'power1'} ,{scrub: 5.5})
      

        animateWithGsap('#projects1-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 1,
        })

        animateWithGsap('#projects2-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 0.6,
        })

        animateWithGsap('#projects3-text', {x: 0, 
            opacity: 1,
            ease: 'ease-in', duration: 0.6,
        })
    
      }, [])


        return (

            <div className="bg-[#0b0b0b] w-screen" id='Projects'>
            <div className="flex flex-col justify-start items-center content-layer mx-4">
              <h1 id="title" className="projects2-text text-gray-200 pt-10 text-3xl mb-12 font-josefinsans">
               Main Projects
              </h1>
      
              <div className="flex flex-col justify-start items-center pb-32">
                <div className="w-full">
                  <img src="./assets/i-c-p.png" alt="Reload Page" id="my-pic" className="rounded-2xl w-full about-img" />
                </div>
                <div className="mt-8">
                  <p id="projects2-text" style={{ lineHeight: '1.7' }} className="mt-12 items-start pr-0 content-heading pb-8 font-josefinsans overflow-hidden projects2-text text-base">
                    This project is a clone of the iPhone page from Apple, showcasing a detailed and visually appealing design using Three.js and modern web development techniques. It replicates the smooth transitions, animations, and high-quality visuals of the original page.
                    <br /> Link: <a href="https://iphone-3js-project.vercel.app/" className="text-blue-500">iphone-3js-project.vercel.app</a>
                  </p>
                </div>
              </div>
      
              <div className="flex flex-col justify-start items-center pb-32">
                <div className="w-full">
                  <img src="./assets/s-b-s.png" alt="Reload Page" id="my-pic" className="rounded-2xl w-full about-img" />
                </div>
                <div className="mt-8">
                  <p id="projects1-text" style={{ lineHeight: '1.7' }} className="content-heading pb-8 font-josefinsans overflow-hidden projects1-text text-base">
                    Eclipso is a comprehensive web hosting platform designed to provide users with an efficient, reliable, and easy-to-use interface for managing their websites. This project focuses on delivering top-notch performance and scalability.
                    <br /> Link: <a href="https://eclipso.vercel.app/" className="text-blue-500">eclipso.vercel.app</a>
                  </p>
                </div>
              </div>
      
              <div className="flex flex-col justify-start items-center pb-8 mb-8">
                <div className="w-full">
                  <img src="./assets/t-s.png" alt="Reload Page" id="my-pic" className="rounded-2xl w-full about-img" />
                </div>
                <div className="mt-8">
                  <p id="projects3-text" style={{ lineHeight: '1.7' }} className="content-heading pb-8 font-josefinsans overflow-hidden projects2-text text-base">
                    It is a project done on HTML and Spline where I created a 3D presentation of a YouTube Educator "Anna Thomas" as a token of appreciation for participating in a talk session conducted by IEDC Bootcamp CEC.
                    <br /> Link: <a href="https://talk-session-p.vercel.app/" className="text-blue-500">talk-session-p.vercel.app</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      };
      

const Projects = () => {

    const isDesktop = useMediaQuery({minWidth: 768})
    return isDesktop ? <Desktop /> : <Mobile />;}

export default Projects
