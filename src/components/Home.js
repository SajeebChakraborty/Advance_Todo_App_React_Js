import React from 'react'

import style from './home.module.css';
import NewTodo from './NewTodo';
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


  return (

    <div className={style.container}>

        <h1 style={{ color:"white" }}>Todo App</h1>

        <NewTodo/>

        <Todos todos={dummyTodos}/>

      
    </div>
  )
}
