import React from 'react'

import style from './todos.module.css'
//add component
import Todo from './Todo'

export default function Todos(props) {
  return (

    <section className={style.todos}>
      
        {props.todos.map((todo)=> 
        
            <Todo key={todo.id} todo={todo.todo}/>
        
        
        )}


    </section>
  )
}
