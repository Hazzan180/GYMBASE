import React,{useState, useEffect} from 'react'
import './trainer.css'

//improt carousel
import Carousel from '../../../Carousel/Carousel'

//improt Card
import {Card} from '../../../Card/Card'

//import trainer data
import Trainers from '../../../../Data'
//import BodyPart from '../../ExerciseCom/BodyPart'

import Alert from '../../../Alert/Alert'

const Trainer = () => {
  const [team, setTeam] = useState(Trainers)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [height, setheight] = useState()
  const [weight, setweight] = useState()
  const [age, setAge] = useState()
  const [sex, setSex] = useState()
  const [factor, setFactor] = useState()
  const [alert, setAlert] = useState({show:false})

    const handulCategory = (category) => {
      const upDateCategory = Trainers.filter((item) => {
        return item.category === category
      })
  
      setSelectedCategory(category);
      setTeam(upDateCategory);
    }

    const handleAlert = ({type, text}) => {
      setAlert({show:true, type, text})
    }

    const SubmitValue = (e) => {
      e.preventDefault();


      if (!height || !weight || !age || !sex || factor === 'none') {
        handleAlert({type: 'danger', text: 'Please fill out all required fields before submitting.'})
        return;
      }

      let BMI = weight / height / height * 10000
      let BMIFixed = BMI.toFixed(2)
      let status 

      if(BMIFixed < 18.5){
        status = 'YOU ARE UNDERWEIGHT!'
      }else if(BMIFixed > 18.5 || BMIFixed === 24.9){
        status = 'YOU ARE HEALTHY!'
      }else if(BMIFixed > 25.0 || BMIFixed === 29.9){
        status = 'YOU ARE OVERWEIGHT'
      }else if(BMIFixed > 30.0){
        status = 'YOU ARE OBESE'
      }
      
      const BMR = sex === 'male' ? 66 + (13.7 * weight) + (5 * height) - (6.8 * age) : 
      655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)

        
     const BMRFixed = BMR.toFixed(1)
    
     let calculatedCalories;

     if (factor === 'little') {
       calculatedCalories = BMR * 1.2;
     } else if (factor === 'light') {
       calculatedCalories = BMR * 1.375;
     } else if (factor === 'moderate') {
       calculatedCalories = BMR * 1.55;
     } else if (factor === 'hard') {
       calculatedCalories = BMR * 1.725;
     }
    
      let calculatedCaloriesFixed = calculatedCalories.toFixed(1)
      

      handleAlert({type: 'success', text: `${status}  Your BMI is ${BMIFixed}.  BMR ${BMRFixed} kcal/day, and BMR w/Activity Factor  ${calculatedCaloriesFixed} kcal/day`})

    }
        

  return (
   <>
    <section className='section-p1'>
      <h2 className='text-center font-Raleway text-[20px] text-[#000] font-bold'>TRAIN WITH EXPERTS</h2>
      <h1 className='text-center font-Raleway text-[40px] max-sm:text-[30px] text-[#409915] font-bold'>OUR TEAM</h1>

    <Carousel>
    <div className='flex justify-center max-sm:justify-start gap-[20px]'>
      <button
        style={{backgroundColor: selectedCategory === 'all' ? '#409915' : ''}}
        onClick={() => setTeam(Trainers)}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          All
      </button>
      <button
        style={{backgroundColor: selectedCategory === 'bodycombat' ? '#409915' : ''}}
        onClick={() => handulCategory('bodycombat')}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          Body combat
      </button>
      <button
        style={{backgroundColor: selectedCategory === 'bodyattack' ? '#409915' : ''}}
        onClick={() => handulCategory('bodyattack')}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          Body attack
      </button>
      <button
        style={{backgroundColor: selectedCategory === 'box' ? '#409915' : ''}}
        onClick={() => handulCategory('box')}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          boxing
      </button>
      <button
        style={{backgroundColor: selectedCategory === 'yoga' ? '#409915' : ''}}
        onClick={() => handulCategory('yoga')}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          yoga
      </button>
      <button
        style={{backgroundColor: selectedCategory === 'zumba' ? '#409915' : ''}}
        onClick={() => handulCategory('zumba')}
        type="button"
        className="inline-block rounded border-[1px] border-[#000] px-6 pb-[6px] pt-2 text-xs font-Raleway uppercase 
        leading-normal text-[#000] transition duration-150 ease-in-out hover:border-[#fff] font-semibold
        hover:text-white hover:bg-[#409915]"
        >
          zumba
      </button>
    </div>
    </Carousel>

    <Carousel>
      {
        team?.map((item, index) => (
          <Card 
          key={index}
          img={item.img}
          name={item.name}
          title={item.title}
          />
        ))
      }
    </Carousel>
      
    <section className='flex max-md:flex-col flex-row justify-between mt-7'>

      <div className='w-[50%] max-md:w-[100%]'>
      <h2 className='font-Raleway text-[20px] text-[#000] font-bold uppercase mb-5'>bmi calculator chart</h2>
      
      <table className="w-[80%] max-md:w-[100%] max-md:text-start text-center font-Raleway">
        <thead className="border-b uppercase text-[#000] font-medium dark:border-neutral-500">
          <tr>
            <td className='border-r px-6 py-4 dark:border-neutral-500'>BMI</td>
            <td className='px-6 py-4 dark:border-neutral-500'>Weight Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='border-r px-6 py-4 dark:border-neutral-500'>Blow 18.5</td>
            <td className='px-6 py-4 dark:border-neutral-500'>Uderweight</td>
          </tr>
          <tr className='border-b'>
            <td className='border-r px-6 py-4 dark:border-neutral-500'>18.5 - 24.9</td>
            <td className='px-6 py-4 dark:border-neutral-500'>Healthy</td>
          </tr>
          <tr className='border-b'>
            <td className='border-r px-6 py-4 dark:border-neutral-500'>25.0 - 29.9</td>
            <td className='px-6 py-4 dark:border-neutral-500'>Overweight</td>
          </tr>
          <tr>
            <td className='border-r px-6 py-4 dark:border-neutral-500'>30.0 and Above</td>
            <td className='px-6 py-4 dark:border-neutral-500'>Obese</td>
          </tr>
        </tbody>
      </table>
      <p  className='font-Raleway text-[gray] mt-5'>* BMR Metabolic Rate / BMI Body Mass index</p>
      </div>

      <div className='w-[50%] max-md:w-[100%] max-md:mt-5'>
      <h2 className='font-Raleway text-[20px] text-[#000] font-bold uppercase mb-5'>calculate your bmi</h2>
      <p className='text-[gray] mb-5'>
        Your BMR calculator generates the number of calories you 
        body burns per day at rest. Your BMR with activity factor
        is the number of calories your body burns per day based on the 
        activity factor you slected. <br /><br/>
        If you are unsure of where you fall in the activity factor option, 
        I recommend using the sedentary active and/or  lightly moderately 
        active options as a starting point.
      </p>
      <form onSubmit={SubmitValue}>
        <div className='flex justify-between gap-10 mb-5'>
          <input type='text' placeholder='Height/cm' 
          className='w-[50%] placeholder-black outline-none bg-[#f0f0f0] py-3 px-3 '
          onChange={(e) => setheight(e.target.value)} 
          onKeyPress={(e) => {
            if (!/[0-9.]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          />
          <input type='text' placeholder='Weight/kg' 
          className='w-[50%] placeholder-black outline-none bg-[#f0f0f0] py-3 px-3 '
          onChange={(e) => setweight(e.target.value)} 
          onKeyPress={(e) => {
            if (!/[0-9.]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          />
        </div>

        <div className='flex justify-between gap-10 mb-5'>
          <input type='number' placeholder='Age in years' 
          className='w-[50%] placeholder-black outline-none bg-[#f0f0f0] py-3 px-3 '
          onChange={(e) => setAge(e.target.value)} 
          
          />
         <select 
          className='w-[50%] outline-none bg-[#f0f0f0] py-3 px-3' defaultValue="none"
          onChange={(e) => setSex(e.target.value)} 
         >
          <option value="none" disabled hidden>Sex</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        </div>

        <select 
          className='w-[100%] outline-none bg-[#f0f0f0] py-3 px-3 mb-5' defaultValue="none" 
          onChange={(e) => setFactor(e.target.value)} required
         >
          <option value="none" disabled hidden>Select an activity factor:</option>
          <option value='little'>Sedentary (little or no exercise)</option>
          <option value='light'>Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value='moderate'>Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value='hard '>Very active (hard exercise/sports 6-7 days a week)</option>
        </select>
        <button className='font-Raleway rounded-full text-[#fff] bg-[#409915] hover:text-[#409915] hover:bg-white hover:border-2 py-2 px-7 '>calculate</button>
      </form>
      </div>
    </section>

    {
      alert.show && <Alert type={alert.type} text={alert.text} setAlert={setAlert} alert={alert}/>
    }
  
    </section>
   </>
  )
}

export default Trainer