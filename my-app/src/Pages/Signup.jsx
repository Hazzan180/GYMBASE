import React,{useState} from 'react'
import background from '../assets/images/wave.jpeg'
import Icon  from '../assets/images/google.svg'
import {useNavigate} from 'react-router-dom'

import Helement from '../Components/Helment/Helment'
import {useUserAuth} from '../ContextAPi/UseAuthContext'

import {toast} from 'react-toastify'

const Signup = () => {
  const navigate  = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const {signUp, gogleSignIn} = useUserAuth()

  const navigateTo = () => {
    navigate('/login')
  }

  const handelChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData, [name] : value
    })
    
  }

  const handuleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {}

    if(!formData.username.trim()){
      validationErrors.username = 'Username is required'
    }

    if(!formData.email.trim()){
      validationErrors.email = 'Email is required'
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = 'Email is not valid'
    }

    if(!formData.password.trim()){
      validationErrors.password = 'Password is required'
    } else if(formData.password.length < 7){
      validationErrors.password = 'Password must be at least 7 character '
    }

    if(formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = 'Password not matched'
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0){
      setLoading(true);

    try {
      await signUp(formData.email, formData.password);
      setLoading(false);
      toast.success('Account created');
      navigate('/login');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
    }
  }

  const handuleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await gogleSignIn()
      toast.success('Logged in successfully');
      navigate('/cart');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  return (
    <Helement title={'Signup'}>
    {
      loading ? (<p className='font-Raleway text-[40px] max-sm:text-[30px] text-center'>Loading...</p>) : 
      (
        <section 
    className='min-h-screen flex items-center justify-center' 
    style={{ backgroundImage: `url(${background})` }}
    >
      <div className='bg-[#fff] flex rounded-br-[20px]
       shadow-lg max-w-3xl p-5
      '>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl'>
            Create an account
          </h2>
          <p className='text-sm mt-4'>
            Let's get you started and have access to different exercises of your choice
          </p>
          <form className='flex flex-col gap-4' onSubmit={handuleSubmit}>
            <input type="text" 
            name='username' 
            className='p-2 mt-8 border-b border-gray-700 outline-none' 
            placeholder='Name'
            onChange={handelChange}
            />  
            {errors.username && <span className='text-[red]'>{errors.username}</span>}

            <input type="text" 
            name='email' 
            className='p-2 border-b border-gray-700 outline-none' 
            placeholder='Email'
            onChange={handelChange}
            />
            {errors.email && <span className='text-[red]'>{errors.email}</span>}

            <input type="password" 
            name='password' 
            className='p-2 border-b border-gray-700 outline-none'  
            placeholder='Password'
            onChange={handelChange}
            /> 
            {errors.password && <span className='text-[red]'>{errors.password}</span>}

            <input type="password" 
            name='confirmPassword'
            className='p-2 border-b border-gray-700 outline-none'  
            placeholder='Confirm Password'
            onChange={handelChange}
            /> 
            {errors.confirmPassword && <span className='text-[red]'>{errors.confirmPassword}</span>}

            <button className='bg-[#409915]  py-2 text-white hover:bg-white hover:border hover:text-black'>
              Create account
            </button>
          </form>

          <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-700'/>
            <p className='text-center'>OR</p>
            <hr className='border-gray-700'/>
          </div>

          <button  onClick={ handuleGoogleSignin} className='bg-white mt-5 border hover:bg-[#409915] hover:text-[#fff]  py-2 w-full mb-5 flex justify-center items-center'>
            <img src={Icon} className='h-[25px] w-[25px] mr-3'/>
            Login with Google 
          </button>
          <div className='text-xs flex justify-between gap-5 items-center'>
          <p>Already have an account</p>
          <button className='py-2 px-4 bg-white border hover:bg-[#409915] hover:text-[#fff]' onClick={navigateTo}>
            Login
          </button>
        </div>
        </div>

        <div className='md:block hidden w-1/2'>
          <img src="https://shorturl.at/gpDIX" alt="img" className='rounded-br-[20px] rounded-tl-[20px] h-[100%]' />
        </div>
      </div>
    </section>
      )
    }
    </Helement>
  )
}

export default Signup 