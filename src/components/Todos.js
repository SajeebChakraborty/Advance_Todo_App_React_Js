import React from 'react'

//add component
import Todo from './Todo'

export default function Todos(props) {
  return (
    <div>
      
        {props.todos.map((todo)=> 
        
            <Todo key={todo.id} todo={todo}/>
        
        
        )}


    </div>
  )
}
