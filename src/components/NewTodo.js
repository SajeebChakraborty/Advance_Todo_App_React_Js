import React from 'react'

import style from './newtodo.module.css';

export default function NewTodo() {
  return (
    <div>
      <form className={style.form}>

            <div className={style.formfield}>

              <label htmlFor='title'>Title</label>
              <input type='text' id='title' name='title'/>


            </div>

            <div className={style.formfield}>

              <label htmlFor='desc'>Description</label>
              <textarea type='text' id='desc' name='desc'/>


            </div>
            <button type='submit' className={style.btn}>Add Todo</button>

      </form>
    </div>
  )
}
