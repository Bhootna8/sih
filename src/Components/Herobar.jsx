import React from 'react'
import hero1 from '../assets/hero1.png'

const Herobar = () => {
  return (
    <div className='flex items-center flex-col w-full'>
    <ul className=' flex items-center w-full text-[13px] *:mr-8 justify-center h-[80px] bg-white list-none'>
        <li>DISCOVER ABOUT SIH</li>
        <li>GUIDELINES</li>
        <li>IMPLEMENTATION TEAM</li>
        <li>PROJECT IMPLEMENTATION</li>
        <li>RESULT</li>
        <li>SUPPORT</li>
    </ul>
    <img src={hero1} className='w-full h-[500px]' alt="" />
    </div>
  )
}

export default Herobar