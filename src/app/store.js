import { configureStore } from '@reduxjs/toolkit'
//importando abaixo o postSlice como postReducer:
import postReducer from '../features/posts/postSlice'


export const store = configureStore({
  reducer: {
    posts: postReducer
  },
})
