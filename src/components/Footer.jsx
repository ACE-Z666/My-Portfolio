import React from 'react'

const Footer = () => {
  return (
    <div  className='flex flex-col'>
    <div className='bg-[#0f0f0f] h-[15vh]'>
    <div className='flex flex-row items-start gap-x-24 mx-6 my-8 '>
      <div>
        <h1 className='text-white font-bold font-nycd text-3xl'>Abhijith J Nair</h1>
        <p className='text-gray-400 text-xs'></p>

      </div>

    </div>
      
    </div>
    <div className='bg-black h-[4vh]'>
       
    <div className='flex justify-center items-center mt-2'>
    <p className='text-gray-400 text-xs'>© 2024 Abhijith J Nair. All rights reserved.</p> </div>

    </div>
    </div>
  )
}

export default Footer
