import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// const initialState = {
//     questionsRedux: [],
//     //loading, error, ready
//     status: 'ready',
//     index: 0, 
//     currentQuestion: {},
//     answer: null,
//     points: 0,
//     highscore: 0
// }


// var timersvalue=sessionStorage.getItem("Timer");
// var optionsvalue=sessionStorage.getItem("Selections");
// const timerArr = JSON.parse(timersvalue);
// const selectionArr = JSON.parse(optionsvalue);


export const createCandidateData = createAsyncThunk('candidates/createCandidate', async ()=>{
  //console.log(timersvalue)
  //console.log(typeof(timersvalue))
  //console.log(optionsvalue)
 //console.log(typeof(optionsvalue))

var gendersvalue=sessionStorage.getItem("Genders");
var agesvalue=sessionStorage.getItem("Ages");
//gendersvalue=JSON.stringify(gendersvalue)
//agesvalue=JSON.stringify(agesvalue)
var timersvalue=sessionStorage.getItem("Timer");
var optionsvalue=sessionStorage.getItem("Selections");

const timerArr = JSON.parse(timersvalue);
const selectionArr = JSON.parse(optionsvalue);
const genderArr = JSON.parse(gendersvalue);
const ageArr = JSON.parse(agesvalue);
    try {
      const dataset ={
                gender:genderArr,
                age:ageArr,
                timers: timerArr,
                selections:selectionArr,
                
               };
        const response = await fetch(`http://localhost:5000/api/candidate`, {
       
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
           //'Content-Type':'application/x-www-form-urlencoded'
           },
        body: JSON.stringify(dataset)
         });
         //return response.json()

        const data = await response.json();
      
        console.log(data);
       } 
       
       catch(error) {
     // enter your logic for when there is an error (ex. error toast)

          console.log(error)
         } 
    }
   
    
)



// const candidateSlice = createSlice({
    
//     name: 'candidates',
   
//     initialState,
//     reducers:{
//         newAnswer: (state, {payload}) =>{
//             state.answer = payload
//             state.points = payload === state.currentQuestion.correctAnswer ? 
//                 state.points + 20 : state.points
//         },
//         nextQuestion: (state)=>{
            
//             let temp = state.questionsRedux[state.index + 1]
//             let newArray = {id: temp.id, 
//               correctAnswer: temp.correctAnswer, 
//               question: temp.question.text,
//               image: temp.image,
//               options: shuffleArray([...temp.incorrectAnswers, temp.correctAnswer])
//             }
//             if (state.index <2) {
//             state.index += 1
//             state.currentQuestion= newArray
//             state.answer= null}
            

//         },
//         gameEnded: (state) =>{
//             state.highscore= state.points > state.highscore ? state.points : state.highscore
//         }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(getQuestions.pending, (state)=>{
//             state.status = 'loading'
//         }).addCase(getQuestions.fulfilled,(state, {payload})=>{
//             //console.log([payload].sort( () => Math.random() - 0.5) );
//             // console.log( [
//             //     { some: 1 },
//             //     { some: 2 },
//             //     { some: 3 },
//             //     { some: 4 },
//             //     { some: 5 },
//             //     { some: 6 },
//             //     { some: 7 },
//             //   ]
//             //   .sort( () => Math.random() - 0.5) );
//             let temp = payload[0]
//             let newArray = {id: temp.id, 
//                 correctAnswer: temp.correctAnswer, 
//                 question: temp.question.text,
//                 image: temp.image,
//                 options: shuffleArray([...temp.incorrectAnswers, temp.correctAnswer])
//               }
//             state.status = 'ready'
//             state.questionsRedux = payload
//             state.currentQuestion= newArray
//             state.index = 0
//             state.points = 0
//             state.answer = null
//         }).addCase(getQuestions.rejected, (state)=>{
//             state.status = 'error'
//         })
//     }
// })

// export const {newAnswer, nextQuestion, gameEnded} = candidateSlice.actions
//export default candidateSlice.reducer