import React from 'react'
import textImg from '../assets/text.png'
import seniorImg from '../assets/senior.png';

const VideoArea = () => {
  return (
    <div className='video-container w-[90%] mx-auto py-5'>
        <iframe src="https://www.youtube.com/embed/dGBt8_QUguY" title='modi video' className=' h-full w-full object-fill' frameBorder="0"></iframe>

        <img src={textImg} className='textImg' alt="" />
        <img src={seniorImg} className='seniorImg' alt="" />
    </div>
  )
}

export default VideoArea