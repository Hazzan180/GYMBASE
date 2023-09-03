import React,{useState, useEffect} from 'react'
import Banner from '../Components/Banner/Banner'
import Search from '../Components/UI/ExerciseCom/Search'
import Exercises from '../Components/UI/ExerciseCom/Exercises'

import Helment from '../Components/Helment/Helment'

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodyPart] = useState('all');


  return (
    <Helment title={'Exercise'}>
    <section>
      <Banner title={'practice different exercises of your choice'}/>
      <Search exercises={exercises} 
      setExercises={setExercises}
      bodypart={bodypart}
      setBodyPart={setBodyPart}
      />
      <Exercises exercises={exercises} 
      setExercises={setExercises} 
      bodypart={bodypart}
      />
    </section>
    </Helment>
  )
}

export default Exercise