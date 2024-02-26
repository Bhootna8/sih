import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className='flex items-center px-3 bg-[#F8F9FA]'>
        <img src={logo} className='w-[300px] h-[60px]' alt="" />

        <div className=' flex items-center ml-auto mr-10'>
            <a href="alumni">ALUMNI</a>
            <a href="login">LOGIN / REGISTER</a>
        </div>
    </nav>
  )
}

export default Header