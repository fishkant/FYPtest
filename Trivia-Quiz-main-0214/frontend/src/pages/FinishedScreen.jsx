import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SocialMedia } from '../components/SocialMedia'
import { useSelector } from 'react-redux'


export const FinishedScreen = () => {
    // const {points, highscore} = useSelector(store => store.questions)
    // const {gameMode} = useSelector(store => store.difficulty)
    // const percentage = Math.ceil(points*100/300)
    // const navigate = useNavigate()
    
    const timersvalue = [sessionStorage.getItem('Timer')]
    const optionsvalue = [sessionStorage.getItem('Selections')]
    const timerArr = JSON.parse(timersvalue);
    const selectionArr = JSON.parse(optionsvalue);
    console.log(timerArr)
    console.log(selectionArr)
  


    
    // const handleMainMenu = () => {
    //   localStorage.clear();
    //   sessionStorage.clear();
    //   navigate(`/`);
    //   const selections = [];
    //   const timers = [];
    //   }

    // const handleReset = () => {
    //     localStorage.clear();
    //     sessionStorage.clear()
    //     navigate(`/quiz/${gameMode}`)
    //     const selections = [];
    //     const timers = [];
    //     }


    // let congrats
    // if(percentage === 100) congrats = "Perfect!"
    // if(percentage >= 80 && percentage < 100) congrats = "Excellent!"
    // if(percentage >= 50 && percentage < 80) congrats = "Good!"
    // if(percentage > 0 && percentage < 50) congrats = "Bad luck!"
    // if(percentage === 0) congrats = "Oh no!"


    // class HelloWorldMultiple extends React.Component {
    //   render() {
    //     return <h1>
    //               { function() {
    //                 let rows = [];
    //                 for (let i=0; i < 4; i++) {
    //                   rows.push(<HelloWorld key={i} />);
    //                 }
    //                 return rows;
    //               }() }
    //            </h1>
    //   }
    // }

   


    const resultsContent = timersvalue => {
      let content = [];
      for (let i = 0; i < timerArr.length; i++) {
        const timeritem = timerArr[i];
        const selectionitem = selectionArr[i];
        content.push(<p>In Question {i+1}, You answered <strong>{selectionitem}</strong> in {timeritem/100} seconds</p>);
      }
      return content;
    };


  return (
    <>
    

      
       <p className='result'>
        Test Completed!
       </p>
        {/* <p className='highscore'>You answered <strong>{selectionArr[0]}</strong> in {timerArr[0]/100} seconds.<br />
        You answered <strong>{selectionArr[1]}</strong> in {timerArr[1]/100} seconds.<br />
        You answered <strong>{selectionArr[2]}</strong> in {timerArr[2]/100} seconds.<br /></p> */}
    
        <p className='highscore'>
      
        {resultsContent()}
        
        </p>


        
        {/* <p className='result'>
           {congrats} You scored <strong>{points}</strong> out of 60 ({percentage}%)
        </p>
        <p className='highscore'>(Highscore: {highscore} points)</p>
        <div className='reset-btns'>
            <button className='btn' onClick={()=>handleMainMenu()}>Main Menu</button>
            <button className='btn' onClick={()=>handleReset()}>Reset</button>
        </div> */}


        
    </>
  )



  
}
