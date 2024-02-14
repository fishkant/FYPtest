import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gameEnded, nextQuestion } from '../features/questions/questionsSlice'
import { lessSeconds, restartTimer, stopTimer } from '../features/timer/timerSlice'
import { createCandidateData } from '../features/storedata/candidateSlice'


export const Next = () => {
    const {index} = useSelector(store => store.questions)
    var timersvalue = [];
    var optionsvalue = [];

    const dispatch = useDispatch()
    const navigate = useNavigate()


    
    const handleFinish = ()=>{
        timersvalue=sessionStorage.getItem("Timer")
        optionsvalue=sessionStorage.getItem("Selections")
        dispatch(createCandidateData())
        dispatch(gameEnded())
        navigate('/results')
    }

    const handleStopTimer = () => {
    dispatch(nextQuestion());
    dispatch(restartTimer())
    }
 

  if(index < 5) return (
    <button className='btn btn-ui' onClick={()=>handleStopTimer()}>Next</button>
  )
  
  return (
    <button className='btn btn-ui' onClick={handleFinish}>Finish</button>
  )
}
