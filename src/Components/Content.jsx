import React from 'react'
import Herobar from './Herobar'
import ListBox from './ListBox'
import VideoArea from './VideoArea'
import hackathonImg from '../assets/hackathon.png'
import About from './About'

const Content = () => {
  return (
    <section className='flex items-center flex-col'>
        <Herobar/>
        <ListBox/>
        <VideoArea/>
        <img src={hackathonImg} className=' w-[90%] h-[500px] my-10 object-fill' alt="" />
        <About/>
    </section>
  )
}

export default Content