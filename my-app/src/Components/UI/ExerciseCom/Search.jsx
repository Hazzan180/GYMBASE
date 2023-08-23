import React,{useState, useEffect} from 'react'
import {fetchData, exerciseOptions} from '../../../Utils/FetchFromAPI'

import {AiOutlineSearch} from 'react-icons/ai'

import BodyPart from './BodyPart'
import LoaderComponent from '../../Loader/LoaderComponent'

const Search = ({exercises, setExercises, setBodyPart, bodypart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handuleSearch = async () => {
   try {
    if(search){
      setIsLoading(true); // Start loading
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
       exerciseOptions)
       //console.log(exercisesData)

       const searchExercises = exercisesData.filter((exercise) => 
       exercise.name.toLowerCase().includes(search) ||
       exercise.target.toLowerCase().includes(search) ||
       exercise.equipment.toLowerCase().includes(search) ||
       exercise.bodyPart.toLowerCase().includes(search) 
       )
       window.scrollTo({ top: 300, left: 100, behavior: 'smooth' });
       setSearch('')
       setExercises(searchExercises)
       setIsLoading(false); // Loading complete
    }

   } catch (error) {
    console.log(error)
    setIsLoading(false); // Loading failed
   }
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        //console.log(bodyPart);
        setBodyParts(['all', ...bodyPartData])
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesData()
  },[])
  
  return (
    <>
    <div className="section-p1">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      value={search}
      type="search"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto 
      rounded-l border border-solid border-neutral-300 
      bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base 
      font-normal leading-[1.6] text-neutral-700 outline-none 
      transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_#409915] 
      focus:outline-none dark:border-[#E3E6F3] dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" 
      />

    <button
      className="relative z-[2] flex items-center rounded-r 
      bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight 
      text-[#fff] bg-[#409915] hover:bg-white hover:text-[#409915] hover:border 
      border-solid border-neutral-300"
      type="button"
       onClick={handuleSearch}
      >
     {isLoading ? (
       <LoaderComponent /> 
    ) : (
      <AiOutlineSearch className="text-[20px]" />
    )}
    </button>
    </div>
    </div>
    <BodyPart data={bodyParts} bodypart={bodypart} setBodyPart={setBodyPart} />
    </>
  )
}

export default Search