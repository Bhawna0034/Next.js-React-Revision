import React from 'react'

const TodoList = () => {
    const todos = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJs", "NextJs"];
  return (
    <div>
     <ul>
      {
        todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
        } )
      }
      </ul>
    </div>
  )
}

export default TodoList
