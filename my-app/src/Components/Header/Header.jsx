import React,{useRef} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import './header.css';

import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

import {useUserAuth} from '../../ContextAPi/UseAuthContext'
import {toast} from 'react-toastify'

const Header = () => {
  const navigate  = useNavigate()
  const navRef = useRef(null) 
  const profileRef = useRef(null)
  const {user, logOut} = useUserAuth()

  const openBar = () => navRef.current.classList.add('active')

  const closeBar = () => navRef.current.classList.remove('active')

  const toggleProfile = () => profileRef.current.classList.toggle('show')

  const hadelLogOut = async () => {
    try {
      await logOut();
      toast.success('Logged out successful');
      navigate('/');
    } catch (error) {
      toast.error(err.message);
      setLoading(false); 
    }
  }

  return (
    <section className='header'>
      <Link to='/' className='logo'>
        <img src='https://rb.gy/j0s3d' alt='logo'/>
        <h1>GYMBASE</h1>
      </Link>

      <div>
        <ul className='navbar' ref={navRef}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

          <li>
            <NavLink to='/exercise'>Exercise</NavLink>
          </li>
          
          <span className='close-icon' onClick={closeBar}>
          <AiOutlineClose />
          </span>
        </ul>
      </div>

      <div className='profile'>
      <button onClick={toggleProfile} className='font-Raleway rounded-full text-[#fff] bg-[#409915] hover:text-[#409915] hover:bg-white hover:border-2 py-2 px-7 max-sm:px-4 '>Account</button>

      <div className='profile-action' ref={profileRef} onClick={toggleProfile}>
        {
          user ? (<span onClick={hadelLogOut}>Logout</span>) : (
            <div>
              <Link to='/signup'>Signup</Link><br/>
              <Link to='/login'>Login</Link>
            </div>
          )
        }
      </div>
      </div>

      <div className='nav-icons' onClick={openBar}>
        <AiOutlineMenu />
      </div>
    </section>
  )
}

export default Header