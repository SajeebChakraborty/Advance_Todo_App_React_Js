import React from 'react'

import style from './todo.module.css'

export default function Todo(props) {
  
  const {title,desc}=props.todo;

  const onHandleDelete=(id)=>{


    alert(id);


  }


  return (
    <article className={style.todo}>
        
        <div>

            <h3>{title}</h3>
            <p>{desc}</p>

        </div>

        <div>

            <button className={style.btn} onClick={()=>{onHandleDelete(props.id)}}>

                <i className="fa-solid fa-trash fa-2x"></i>

            </button>


        </div>

    </article>
  )
}
