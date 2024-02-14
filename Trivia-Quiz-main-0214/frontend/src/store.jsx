import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from "./features/difficulty/difficultySlice";
import timerReducer from "./features/timer/timerSlice";
import questionsReducer from "./features/questions/questionsSlice";
import gendersReducer from "./features/gender/genderSlice";
import agesReducer from "./features/age/ageSlice";

export const store = configureStore({
    reducer: {
        difficulty: difficultyReducer,
        timer: timerReducer,
        questions: questionsReducer,
        genders: gendersReducer,
        ages: agesReducer,
    }
})
