import React from 'react'

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
    <div>

        <Todos todos={dummyTodos}/>

      
    </div>
  )
}
