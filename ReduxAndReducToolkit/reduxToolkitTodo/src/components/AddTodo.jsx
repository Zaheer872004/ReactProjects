import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addTodo, initializeTodos, updateTodo } from '../features/todo/todoSlice';





function AddTodo({editingTodo, setEditingTodo}) {


const [input, setInput] = useState('')

const todos = useSelector(state => state.todos)

const dispatch = useDispatch();


useEffect(() => {

  if(editingTodo){
    setInput(editingTodo.text)
  }
  else{
    setInput('')
  }

}, [editingTodo])


const addOrUpdateTodoHandler = (e) => {

  e.preventDefault()

  if(!input) return;

  if(editingTodo){
    dispatch(updateTodo({id: editingTodo.id, text: input}))
    setEditingTodo(null)
    
  }else{
    dispatch(addTodo(input))
  }

  setInput('')

}




useEffect(() => {
  
  const getTodos =  JSON.parse(localStorage.getItem('todos'))
  
  if(getTodos && getTodos.length > 0){
    dispatch(initializeTodos(getTodos))
  }

}, [])

useEffect(() => {

  localStorage.setItem('todos', JSON.stringify(todos));

}, [todos])



  return (
    <form onSubmit={addOrUpdateTodoHandler} className="text-center space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  )

}

export default AddTodo