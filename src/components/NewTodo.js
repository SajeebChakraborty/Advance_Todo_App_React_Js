import React, { useState } from 'react'

import style from './newtodo.module.css';

export default function NewTodo() {

  const [todo,setTodo]=useState({title:"",desc:""});

  const {title,desc}=todo;

  const onHandleSubmit=(e)=>{

    e.preventDefault();
    console.log(todo);

    setTodo({title:"",desc:""});

  }
  
  const onHandleChange=(e)=>{

    const name=e.target.name;

    setTodo((oldTodo)=>{

      return {...oldTodo,[name]:e.target.value}

    });

  }




  return (
    <div>
      <form className={style.form} onSubmit={onHandleSubmit}>

            <div className={style.formfield}>

              <label htmlFor='title'>Title</label>
              <input type='text' id='title' name='title' value={title} onChange={onHandleChange}/>


            </div>

            <div className={style.formfield}>

              <label htmlFor='desc'>Description</label>
              <textarea type='text' id='desc' name='desc' value={desc} onChange={onHandleChange}/>


            </div>
            <button type='submit' className={style.btn}>Add Todo</button>

      </form>
    </div>
  )
}
