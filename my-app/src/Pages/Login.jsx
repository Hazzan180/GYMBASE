import React,{useState} from 'react'
import background from '../assets/images/wave.jpeg'
import Icon  from '../assets/images/google.svg'
import {useNavigate} from 'react-router-dom'
import {useUserAuth} from '../ContextAPi/UseAuthContext'
import Helement from '../Components/Helment/Helment'
import {toast} from 'react-toastify'

const Login = () => {
  const navigate  = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const {logIn, gogleSignIn} = useUserAuth()

  const navigateTo = () => {
    navigate('/signup')
  }


  const handuleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await logIn(email, password);
      setLoading(false);
      toast.success('Login successful');
      navigate('/exercise');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  const handuleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await gogleSignIn()
      toast.success('Logged in successfully');
      navigate('/exercise');
      // Redirect to your desired page after successful signup
    } catch (err) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  return (
    <Helement title={'Login'}>
    {
      loading ? (<p className='font-Raleway text-[40px] max-sm:text-[30px] text-center'>Loading..</p>) : (
        <section 
    className='min-h-screen flex items-center justify-center' 
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
          <form className='flex flex-col gap-4' onSubmit={handuleSubmit}>
          <input type="text" 
            name='email' 
            className='p-2 border-b border-gray-700 outline-none' 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            />
            

            <input type="password" 
            name='password' 
            className='p-2 border-b border-gray-700 outline-none'  
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            /> 
            
            <button className='bg-[#409915]  py-2 text-white hover:bg-white hover:border hover:text-black'>
              Login
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
      )
    }
    </Helement>
  )
}

export default Login