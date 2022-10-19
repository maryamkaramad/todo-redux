import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id:1,title:'buy ticket',status:false,

},
{
    id:2,title:'buy milk',status:false,

},
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    AddTodo: (state,action) => {
    const payload=action.payload
    //payload= title
    state.push ({id:Math.floor(Math.random()*1000),titlt:payload,state:false})
    },
    DeleteTodo: (state,action) => {
        //paylod=id
        const payload=action.payload;
    const index=state.findIndex(todo=>todo.id === payload)
    state.splice(index,1)
    },
        UpdateTodo: (state, action) => {
            //payload=>{ id:1,titlt:'buy ticket',status:false,}
            const payload=action.payload;
            const index=state.findIndex(todo=>todo.id === payload.id)
          state[index]=payload
      
    },
  },
})


export const { AddTodo, DeleteTodo, UpdateTodo } = todoSlice.actions

export default todoSlice.reducer