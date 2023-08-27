import React from 'react'
import background from '../assets/images/wave.jpeg'
import Icon  from '../assets/images/google.svg'
import {useNavigate} from 'react-router-dom'

import Helement from '../Components/Helment/Helment'

const Login = () => {
  const navigate  = useNavigate()

  const navigateTo = () => {
    navigate('/signup')
  }

  return (
    <Helement title={'Login'}>
    <section 
    className='min-h-screen flex items-center justify-center mt-10' 
    style={{ backgroundImage: `url(${background})` }}
    >
      <div className='bg-[#fff] flex rounded-br-[20px]
       shadow-lg max-w-3xl p-5
      '>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl'>
            Welcome Back
          </h2>
          <p className='text-sm mt-4'>
            Enter your credentials to access your account
          </p>
          <form className='flex flex-col gap-4'>
            <input type="text" className='p-2 mt-8 border-b border-gray-700 outline-none' placeholder='Email'/>
            <input type="password" className='p-2 border-b border-gray-700 outline-none'  placeholder='Password'/> 
            <button className='bg-[#409915]  py-2 text-white hover:bg-white hover:border hover:text-black'>
              Login
            </button>
          </form>

          <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-700'/>
            <p className='text-center'>OR</p>
            <hr className='border-gray-700'/>
          </div>

          <button className='bg-white mt-5 border hover:bg-[#409915] hover:text-[#fff]  py-2 w-full mb-5 flex justify-center items-center'>
            <img src={Icon} className='h-[25px] w-[25px] mr-3'/>
            Login with Google 
          </button>
          <div className='text-xs flex justify-between gap-5 items-center'>
          <p>Don't have an account</p>
          <button className='py-2 px-4 bg-white border hover:bg-[#409915] hover:text-[#fff]' onClick={navigateTo}>
            Register
          </button>
        </div>
        </div>

        <div className='md:block hidden w-1/2'>
          <img src="https://shorturl.at/dipAT" alt="img" className='rounded-br-[20px] rounded-tl-[20px] h-[100%]' />
        </div>
      </div>
    </section>
    </Helement>
  )
}

export default Login