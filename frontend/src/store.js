import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from "./Slice/userDataSlice.js"

export const store = configureStore (
    {
        reducer  : {
            users : userDataReducer
        }
    }
)