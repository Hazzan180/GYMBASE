import React from 'react'

import HeroSlider from '../Components/UI/HomeComp/HeroSlider/HeroSlider'
import Offer from '../Components/UI/HomeComp/Offer/Offer'
import Trainer from '../Components/UI/HomeComp/Trainer/Trainer'

import Helment from '../Components/Helment/Helment'

const Home = () => {
  return (
   <Helment title='Home'>
    <HeroSlider />
    <Offer />
    <Trainer />
   </Helment> 
  )
}

export default Home