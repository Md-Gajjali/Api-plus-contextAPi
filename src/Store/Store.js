import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
})
