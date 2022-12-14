import React, { useState } from 'react'

import style from './home.module.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid';
//add component
import Todos from './Todos';

export default function Home() {

  const dummyTodos=[

    {

        id: 1,
        title: 'todo title 1',
        desc: 'todo1 description is here...'



    },

    {

        id: 2,
        title: 'todo title 2',
        desc: 'todo2 description is here...'



    }




  ];

  const [todos,setTodos]=useState([]);

  const todoAdd=(todo)=>{

    setTodos((oldTodo)=>{

      return[...oldTodo,{id:uuidv4(), todo}]

    
    })
    console.log(todo);


  }

  const onhandleRemove=(id)=>{

    const availableTodo= todos.filter((todo) => todo.id!=id);
    setTodos(availableTodo);


  }


  return (
    <div className={style.container}>

        <h1 style={{ color:"white" }}>Todo App</h1>

        <NewTodo addTodo={todoAdd}/>

        <Todos todos={todos} onRemovetodo={onhandleRemove}/>

      
    </div>
  )
}
