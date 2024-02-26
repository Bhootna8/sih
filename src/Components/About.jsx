import React from 'react'
import aboutImg from '../assets/about.png'
import featuresImg from '../assets/features.png'

const About = () => {
  return (
    <div className=' w-full'>
        <img src={aboutImg} className='w-full h-[500px] object-fill' alt="" />
        <img src={featuresImg} className='w-full h-[600px]' alt="" />

    </div>
  )
}

export default About