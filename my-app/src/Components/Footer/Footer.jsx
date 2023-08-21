import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    
<footer className="section-p1">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-1 gap-8 text-center max-md:text-start px-4 py-6 lg:py-8 md:grid-cols-3">
      <div className='text-start'>
      <Link to='/' className='flex items-center gap-[10px] mb-4'>
        <img src='https://rb.gy/j0s3d' alt='logo'/>
        <h1 className='text-[25px] font-normal'>GYMBASE</h1>
      </Link>
      <p className='text-[gray] font-Raleway'>We are an independent gym that is committed to working 
        with you to gain the results you want. Whether your aim is 
        to loose weight, tone up, build bulk or gain weight we can put
        together a gym programme or recommend the right classes for you 
        to on our website. Sign in to have access to different expenses</p>
      </div>
      <div>
          <h2 className="mb-6 text-lg font-Raleway text-[#000] uppercase">useful links</h2>
          <ul className="text-[gray] font-Raleway font-medium">
          <li className="mb-4">
            <Link to='/' className='hover:text-[#409915]'>Home</Link>
          </li>

          <li className="mb-4">
            <Link to='/about' className='hover:text-[#409915]'>About</Link>
          </li>

          <li className="mb-4">
            <Link to='/exercise' className='hover:text-[#409915]'>Exercise</Link>
          </li>
          </ul>
      </div>
      <div>
          <h2 className="mb-6 text-lg font-Raleway text-[#000] uppercase">My account</h2>
          <ul className="text-[gray] font-Raleway font-medium">
          <li className="mb-4">
            <Link to='/login' className='hover:text-[#409915]'>Login</Link>
          </li>

          <li className="mb-4">
            <Link to='/signup' className='hover:text-[#409915]'>Sign up</Link>
          </li>
          </ul>
      </div>
    </div>
    <div className="px-4 py-6 bg-[#f0f0f0] text-center font-Raleway">
        <span className="text-lg font-Raleway text-[#000]">©Copyright 2023 developed by <a href="https://github.com/Hazzan180">Hazzan180</a>. All Rights Reserved.
        </span> 
    </div>
    </div>
</footer>

  )
}

export default Footer