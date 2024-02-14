import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SocialMedia } from './SocialMedia'
import { selectGameMode } from '../features/difficulty/difficultySlice'
import { useDispatch } from 'react-redux'

export const StartScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleClick = (e)=>{
  //       dispatch(selectGameMode(e.target.value))
  //       navigate(`/quiz/${e.target.value}`)
  //     }
      

  const handleClick = (e)=>{
        
        navigate(`/quiz/gender`)
      }

  return (
    <div className='start-screen'>
        <h2>Welcome to my FYP test!</h2>
        <h3>72 question to test on emotions</h3>
        <h3>Each question can be answered only ONCE!</h3>
        <h4 style={{marginTop:"20px"}}>Press Start to start the test</h4>
        <div className="game-mode">
            {/* <button className='btn2' value='easy' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#0ee32a"}}>Easy</button>
            <button className='btn2' value='medium' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#e3ce0e"}}>Medium</button>
            <button className='btn2' value='hard' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#fc2121"}}>Hard</button> */}


            {/* <button className='btn2' value='question' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#0ee32a"}}>Start</button> */}

            <button className='btn2' value='question' onClick={(e)=>handleClick(e)} style={{backgroundColor:"#0e47e3"}}>Go</button>

        </div>
        {/* <SocialMedia/> */}
    </div>
  )
}
