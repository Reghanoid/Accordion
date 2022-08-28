import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main className='container'>
      <header>
        Questions and Answers About Login
        <div>
          <h4> {props.title} </h4>
          <p> {props.info} </p>
        </div>
      </header>
    </main>
  )
}

export default Question
