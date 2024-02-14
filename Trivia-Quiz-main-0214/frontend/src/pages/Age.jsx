import React, { useEffect } from 'react'

import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'

import { StartTest } from '../components/StartTest'

import { useDispatch, useSelector } from 'react-redux'


import { getAges, newAnswer } from '../features/age/ageSlice'

const ageselections = [];

export const Age = () => {
    
    const {status, index, currentQuestion, answer} = useSelector(store => store.ages)
    const dispatch = useDispatch()

    

    const handleAgeInfo = (option) => {
      
      
      dispatch(newAnswer(option))
      console.log(option)
      ageselections.push(option);
      //console.log(selections)
      sessionStorage.setItem("Ages",JSON.stringify(ageselections))
      
      }

     
    useEffect(()=>{
      
      dispatch(getAges())
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
            onClick={()=>handleAgeInfo(option)}>{option}</button>
          })}
        </div>

      
      <footer>
        
        {answer && <StartTest/>}
      </footer>
      </>}
    </main>
  )
}