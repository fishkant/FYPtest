import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const initialState = {
    questionsRedux: [],
    //loading, error, ready
    status: 'ready',
    index: 0, 
    currentQuestion: {},
    answer: null,

}



export const getGenders = createAsyncThunk('genders/getGenders', async (difficulty)=>{
    try{
        //const resp = await fetch(`https://the-trivia-api.com/v2/questions?limit=15&difficulties=${difficulty}`)
        const resp = await fetch(`http://localhost:5000/genders`)
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



const genderSlice = createSlice({
    
    name: 'genders',
   
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
       
    },
    extraReducers:(builder)=>{
        builder.addCase(getGenders.pending, (state)=>{
            state.status = 'loading'
        }).addCase(getGenders.fulfilled,(state, {payload})=>{
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
        }).addCase(getGenders.rejected, (state)=>{
            state.status = 'error'
        })
    }
})

export const {newAnswer, nextQuestion } = genderSlice.actions
export default genderSlice.reducer