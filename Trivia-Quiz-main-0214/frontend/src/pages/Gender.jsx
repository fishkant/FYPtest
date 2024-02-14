import React, { useEffect } from 'react'

import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'

import { GoToAge } from '../components/GoToAge'

import { useDispatch, useSelector } from 'react-redux'


import { getGenders, newAnswer } from '../features/gender/genderSlice'

const genderselections = [];

export const Gender = () => {
    
    const {status, index, currentQuestion, answer} = useSelector(store => store.genders)
    const dispatch = useDispatch()

    

    const handleGenderInfo = (option) => {
      
      
      dispatch(newAnswer(option))
      console.log(option)
      genderselections.push(option);
      //console.log(selections)
      sessionStorage.setItem("Genders",JSON.stringify(genderselections))
      
      }

     
    useEffect(()=>{
      
      dispatch(getGenders())
    },[])

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[index])

    const statement = currentQuestion?.question
    
    const options = currentQuestion?.options
    const hasAnswered = answer !== null
 
  return (
    <main className='main'>
      {status === 'loading' && <Loader/>}
      {status === 'error' && <ErrorMessage/>}
      {status === 'ready' && 
      <>
      
      
      <div className='question-cont'>

        {/* <div className='category' style={difficulty !== 'easy' ? styleCat : {}}> quiz</div> */}
        <h4>{statement}</h4>

      </div> 
       
        
        <div className="options">
          {options?.map(option=>{
            return <button key={option} className={`btn btn-option ${answer === option ? 
            "answer" : ""} 
            ${hasAnswered ? currentQuestion.correctAnswer === option
            ? "correct" : "" : ""}`} 
            disabled={hasAnswered}
            onClick={()=>handleGenderInfo(option)}>{option}</button>
          })}
        </div>

      
      <footer>
        
        {answer && <GoToAge/>}
      </footer>
      </>}
    </main>
  )
}