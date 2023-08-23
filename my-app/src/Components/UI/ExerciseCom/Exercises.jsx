import React,{useEffect, useState} from 'react'
import {ExercisesCard} from '../../Card/Card'
import ReactPaginate from 'react-paginate'

import {fetchData, exerciseOptions} from '../../../Utils/FetchFromAPI'

import '../../../Styles/exercises.css'

const Exercises = ({exercises, setExercises, bodypart}) => { 
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                let exercisesData = [];
    
                if (bodypart === 'all') {
                    exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
                } else {
                    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseOptions);
                }
    
                setExercises(exercisesData);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchExercisesData();
    }, [bodypart]);

    const exercisePerPage = 12
    const pagesVisited = pageNumber * exercisePerPage

    const displayExercises = exercises.slice(pagesVisited, pagesVisited + exercisePerPage)

    const pageCount = Math.ceil(exercises.length / exercisePerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
        window.scrollTo({ top: 350, left: 100, behavior: 'smooth' });
    }

  return (
    <section className='section-p1'>
        <h2 className='text-left font-Raleway text-[40px] max-sm:text-[30px] text-[#409915] font-bold'>Showing result</h2>
        {loading ? ( // Display loader while loading is true
                <div className="flex justify-center items-center h-32">
                    <p className='font-Raleway text-[40px] max-sm:text-[30px]'>Loading...</p>
                </div>
            ) : (
                <div>
                     <div>
                        {exercises.length === 0 ? (
                            <div className="flex justify-center items-center h-32">
                            <p className='font-Raleway text-[40px] max-sm:text-[30px]'>No match found.</p>
                        </div>
                        ) : (
                        <div  className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                            {displayExercises.map((item) => (
                            <ExercisesCard exerciseID={item} key={item.id}/>
                           ))}
                        </div>
                        )}
                    </div>
                </div>
            )}
        <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginationBttns"}
         previousLinkClassName={"previousBttn"}
         nextLinkClassName={"nextBttn"}
         disabledClassName={"paginationDisabled"}
         activeClassName={"paginationActive"}
         pageRangeDisplayed={1}
         marginPagesDisplayed={0}
        />
    </section>
  )
}

export default Exercises

