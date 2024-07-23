import { createSlice } from "@reduxjs/toolkit"; 



const initialState = [
  { id: '1', title: 'First post!', content: 'Hello!' },
  { id: '2', title: 'Second post!', content: 'More text' },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})


export const { postAdded } = postSlice.actions
export default postSlice.reducer