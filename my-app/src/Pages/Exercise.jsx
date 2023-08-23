import React,{useState} from 'react'
import Banner from '../Components/Banner/Banner'
import Search from '../Components/UI/ExerciseCom/Search'
import Exercises from '../Components/UI/ExerciseCom/Exercises'

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodyPart] = useState('all');
  
  return (
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
  )
}

export default Exercise