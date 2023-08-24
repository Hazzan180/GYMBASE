import React from 'react'
import Banner from '../Components/Banner/Banner'
import {Link} from 'react-router-dom'
import '../Components/UI/HomeComp/Offer/Offer.css'

const About = () => {
  return (
    <section>
      <Banner  title={'About Us'}/>
      <section className='section-p1 offer'>
        <h1 className='text-[50px] max-sm:text-[30px] mb-5 uppercase font-Raleway font-bold text-[#000]'>WHO WE ARE</h1>
        <p className='text-[gray] font-Raleway text-[18px] text-left'>
        We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend the right classes for you to attend in our studios.
        Our members benefit from a free gym programme and review every month, free studio classes and price reductions on our personal training sessions. As a member you can also access our pool and tennis courts for free and have priority for booking any of the pre-book activities, classes or sessions that we run.
        If you don’t want to commit to being a member you can still use all of our facilities but you will need to have an induction session before using the facilities to ensure that Health and Safety requirements are met – you don’t want to injure yourself on your first visit and ruin all your good intentions.
        <Link to='/login' className='text-[#409915]'>Login</Link> or <Link to='/signup' className='text-[#409915]'>Sign up</Link> to have access to best experience practice
        </p>
      </section>
    </section>
  )
}

export default About