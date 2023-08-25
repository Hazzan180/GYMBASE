import React,{useState, useEffect} from 'react'
import Detail from '../Components/UI/ExerciseDetailCom/Detail'
import ExerciseVideos from '../Components/UI/ExerciseDetailCom/ExerciseVideos'
import SimilarExercises from '../Components/UI/ExerciseDetailCom/SimilarExercises'
import Helment from '../Components/Helment/Helment'

import {useParams} from 'react-router-dom'

import {fetchData, exerciseOptions, VideoOptions} from '../Utils/FetchFromAPI' 

const ExerciseDetail = () => {
  const {id} = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState({})
  const [targetMuscleExercises, setTargetMuscleExercises] = useState({})
  const [equipmentExercises, setEquipmentExercises] = useState({})

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubSearchurl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubSearchurl}/search?query=${exerciseDetailData.name}`, VideoOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)
      

      const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
      
    }

    fetchExercisesData()
  },[id])

  return (
   <Helment title={`${exerciseDetail.name}`}>
     <div className='section-p1'>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises  
      targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises}
      />
    </div>
   </Helment>
  )
}

export default ExerciseDetail