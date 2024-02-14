import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Progress } from '../components/Progress'
import { Next } from '../components/Next'
import { Timer } from '../components/Timer'
import { useDispatch, useSelector } from 'react-redux'
import { restartTimer,stopTimer } from '../features/timer/timerSlice'
import { getQuestions, newAnswer } from '../features/questions/questionsSlice'

const selections = [];

export const Question = () => {
    const {difficulty} = useParams()
    const {gameMode} = useSelector(store => store.difficulty)
    const {status, index, currentQuestion, answer} = useSelector(store => store.questions)
    const dispatch = useDispatch()

    

    const handleStopTimer = (option) => {
      
      dispatch(stopTimer());
      dispatch(newAnswer(option))
      console.log(option)
      selections.push(option);
      //console.log(selections)
      sessionStorage.setItem("Selections",JSON.stringify(selections))
      
      }

     
    useEffect(()=>{
      dispatch(restartTimer())
      dispatch(getQuestions(gameMode))
    },[])

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[index])

    const statement = currentQuestion?.question
    const image = currentQuestion?.image
    const options = currentQuestion?.options
    const hasAnswered = answer !== null
    
  return (
    <main className='main'>
      {status === 'loading' && <Loader/>}
      {status === 'error' && <ErrorMessage/>}
      {status === 'ready' && 
      <>
      <Progress/>
      
      <div className='question-cont'>

        {/* <div className='category' style={difficulty !== 'easy' ? styleCat : {}}> quiz</div> */}
        <h4>{statement}</h4>

      </div> 
        <img src={image} alt="picture" width="200" height="200" />
        
        <div className="options">
          {options?.map(option=>{
            return <button key={option} className={`btn btn-option ${answer === option ? 
            "answer" : ""} 
            ${hasAnswered ? currentQuestion.correctAnswer === option
            ? "correct" : "" : ""}`} 
            disabled={hasAnswered}
            onClick={()=>handleStopTimer(option)}>{option}</button>
          })}
        </div>

      
      <footer>
        <Timer />
        {answer && <Next/>}
      </footer>
      </>}
    </main>
  )
}
