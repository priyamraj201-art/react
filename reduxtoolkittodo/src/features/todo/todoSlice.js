import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todoS : [{id: 1, text: 'HELLO WORLD'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{ 

    }
})