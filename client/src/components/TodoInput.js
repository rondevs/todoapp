import React, { useRef } from 'react'

export default function TodoInput({createTodo}) {
    const todoInput = useRef('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        createTodo(todoInput.current.value)
        todoInput.current.value = ''
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' ref={todoInput} required/>
        <input type='submit'/>
    </form>
  )
}
