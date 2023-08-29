import React from 'react'
import './alert.css'

import {MdClose} from 'react-icons/md'

const Alert = ({type, text, setAlert, alert}) => {
 const handuleClose = () => {
  setAlert({ show: false });
 }
  return (
    <div className={`alert alert-${type}`} >
      <h3>{text}</h3>
      {
        alert.show && <MdClose className='text-[40px] text-[#409915]' onClick={handuleClose}/> 
      }
      
    </div>
  )
}

export default Alert