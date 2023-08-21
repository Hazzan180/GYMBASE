import React,{useRef} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './header.css';

import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
  const navRef = useRef(null) 

  const openBar = () => navRef.current.classList.add('active')

  const closeBar = () => navRef.current.classList.remove('active')
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

      <div className='nav-icons' onClick={openBar}>
        <AiOutlineMenu />
      </div>
    </section>
  )
}

export default Header