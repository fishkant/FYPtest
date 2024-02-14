import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lessSeconds, restartTimer, stopTimer } from '../features/timer/timerSlice'
import { gameEnded } from '../features/questions/questionsSlice'


export const Timer = () => {
    const {secondsRemaining} = useSelector(store => store.timer)
    const {stopTimerState} = useSelector(store => store.timer)
    const seconds = Math.floor(secondsRemaining/100)
    const miliseconds = secondsRemaining % 100
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(secondsRemaining === 100){
    //         dispatch(gameEnded())
    //         dispatch(restartTimer())
    //         navigate('/results')
    //     }
    // },[secondsRemaining])

    useEffect(()=>{
      const timer = setInterval(()=>{
        dispatch(lessSeconds())
        }, 10) 

        return ()=>clearInterval(timer);

        // else if(stopTimerState === 1){
        //   const timer = setInterval(()=>{
        //     dispatch(stopTimer())
        //     //dispatch(stopTimer())
        // }, 1000000000)
      
        // return ()=>clearInterval(timer)}
    },[])
    
    //  useEffect(()=>{
    //      if(stopTimerState === 1){
    //       const timer = setInterval(()=>{
    //         dispatch(stopTimer())
    //         //dispatch(stopTimer())
    //     }, 1000000000)
      
    //     return ()=>clearInterval(timer)}
          
    //  },[])


  return (
    <div className='timer'>{seconds < 1  }{seconds}:{miliseconds < 1000 }{miliseconds}</div>
  )
}
