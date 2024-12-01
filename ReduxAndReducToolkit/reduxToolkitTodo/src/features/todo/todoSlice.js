import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
  todos : [
    
  ],


}

const sayHello = () => {
  console.log("Hello", "Zaheer")
}


export const todoSlice = createSlice(
  {
    name : 'todo',
    initialState,
    reducers : {

      // greeting : sayHello,

      // getting value {id, name } = action
      // state give the current state of our store
      
      addTodo : (state, action) => {
        
        const todo = {
          id : nanoid(),
          // text : action.payload.text,  // this also correct
          text : action.payload,
          completed : false
        }

        state.todos.push(todo);

      },

      deleteTodo : (state, action) => {

        const newTodos = state.todos.filter( (todo) => todo.id != action.payload) // also can add action.payload.id
        
        // state.todos.push(newTodos)
        state.todos = newTodos;

      },

      updateTodo : (state, action) => {

        const updateTodo = state.todos.map( (todo) => ( todo.id === action.payload.id ? {...todo , text : action.payload.text} : todo ) )

        state.todos = updateTodo;

      },

      toggleComplete : (state, action) => {

        const toggleTodo = state.todos.map( (todo) => ( todo.id === action.payload.id ? {...todo , completed : !todo.completed } : todo ))

        state.todos = toggleTodo;

      },


      initializeTodos: (state, action) => {
        state.todos = action.payload; // Replace current state with saved todos
      },



    }
  }
)


export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleComplete,
  initializeTodos
} = todoSlice.actions

export default todoSlice.reducer