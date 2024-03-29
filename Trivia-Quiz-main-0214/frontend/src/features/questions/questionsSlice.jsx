import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiHost } from "../../App";



function shuffleArray(array) {
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

const initialState = {
    questionsRedux: [],
    //loading, error, ready
    status: 'ready',
    index: 0, 
    currentQuestion: {},
    answer: null,
    points: 0,
    highscore: 0
}

// function shuffleFisherYates(array) {
//     let i = array.length;
//     while (i--) {
//       const ri = Math.floor(Math.random() * i);
//       [array[i], array[ri]] = [array[ri], array[i]];
//     }
//     return array;
//   }


export const getQuestions = createAsyncThunk('questions/getQuestions', async (difficulty)=>{
    try{
        //const resp = await fetch(`https://the-trivia-api.com/v2/questions?limit=15&difficulties=${difficulty}`)
        const resp = await fetch(`${apiHost}/questions`)
        //console.log(resp)


    //    return (resp.json().then(function(json) {
    //     let i = json.length;
    //     while (i--) {
    //       const ri = Math.floor(Math.random() * i);
    //       [json[i], json[ri]] = [json[ri], json[i]];
    //     }
    //     return json;
            
    //  })

    //     )
        
        return resp.json()
        
    }catch(err){
        console.log(err);
    }
   
    
})



const questionsSlice = createSlice({
    
    name: 'questions',
   
    initialState,
    reducers:{
        newAnswer: (state, {payload}) =>{
            state.answer = payload
            state.points = payload === state.currentQuestion.correctAnswer ? 
                state.points + 20 : state.points
        },
        nextQuestion: (state)=>{
            
            let temp = state.questionsRedux[state.index + 1]
            let newArray = {id: temp.id, 
              correctAnswer: temp.correctAnswer, 
              question: temp.question.text,
              image: temp.image,
              options: temp.incorrectAnswers
            }
            if (state.index <5) {
            state.index += 1
            state.currentQuestion= newArray
            state.answer= null}
            

        },
        gameEnded: (state) =>{
            state.highscore= state.points > state.highscore ? state.points : state.highscore
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getQuestions.pending, (state)=>{
            state.status = 'loading'
        }).addCase(getQuestions.fulfilled,(state, {payload})=>{
            //console.log([payload].sort( () => Math.random() - 0.5) );
            // console.log( [
            //     { some: 1 },
            //     { some: 2 },
            //     { some: 3 },
            //     { some: 4 },
            //     { some: 5 },
            //     { some: 6 },
            //     { some: 7 },
            //   ]
            //   .sort( () => Math.random() - 0.5) );
            let temp = payload[0]
            let newArray = {id: temp.id, 
                correctAnswer: temp.correctAnswer, 
                question: temp.question.text,
                image: temp.image,
                // options: shuffleArray([...temp.incorrectAnswers, temp.correctAnswer])
                options: temp.incorrectAnswers
              }
            state.status = 'ready'
            state.questionsRedux = payload
            state.currentQuestion= newArray
            state.index = 0
            state.points = 0
            state.answer = null
        }).addCase(getQuestions.rejected, (state)=>{
            state.status = 'error'
        })
    }
})

export const {newAnswer, nextQuestion, gameEnded} = questionsSlice.actions
export default questionsSlice.reducer