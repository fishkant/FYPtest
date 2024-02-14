import { createSlice } from "@reduxjs/toolkit";

const timers = [];
const timerSlice = createSlice({
    name:  'timer',
    initialState:{
        secondsRemaining: 0,
        stopTimerState: false,
    },
    reducers:{
        lessSeconds: (state)=>{
            state.secondsRemaining += 1
            state.stopTimerState = false
        },
        restartTimer: (state)=>{
            state.secondsRemaining = 0
            state.stopTimerState = false
        },
        stopTimer: (state)=>{
            state.secondsRemaining += 0
            state.secondsRemaining = state.secondsRemaining
            state.stopTimerState = true
            console.log(state.secondsRemaining)
            timers.push(state.secondsRemaining);
            sessionStorage.setItem("Timer",JSON.stringify(timers))
            
        }
    }
})

export const {lessSeconds, restartTimer,stopTimer} = timerSlice.actions
export default timerSlice.reducer