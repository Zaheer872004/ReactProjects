

import { createContext, useContext } from "react";

export const TodoContext = createContext(
  {
    todos : [
      { 
        id : 1,
        todo : "hello world",
        complete : false
      },
    
    ],
    addTodo : () => {},
    updateTodo : () => {},
    deleteTodo : () => {},
    toggleComplete : () => {},

  }

)


export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
}

