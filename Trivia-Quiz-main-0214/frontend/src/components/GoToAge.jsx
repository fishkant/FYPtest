import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gameEnded, nextQuestion } from '../features/questions/questionsSlice'
import { lessSeconds, restartTimer, stopTimer } from '../features/timer/timerSlice'
import { createCandidateData } from '../features/storedata/candidateSlice'


export const GoToAge = () => {
   
    
    const navigate = useNavigate()

    const handleClick = (e)=>{
        
        navigate(`/quiz/age`)
      }

    
   

  
  return (

           

            <button className='btn btn-ui' value='question' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#0ee32a"}}>Next</button>

    

       
        
    
  )
}