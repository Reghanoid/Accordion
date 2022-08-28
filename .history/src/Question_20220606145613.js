import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main>
      <div className='container'>
        <header>Questions and Answers About Login</header>
        <div className='question'>
          <h4> {props.title} </h4>
          <p> {props.info} </p>
        </div>
      </div>
    </main>
  )
}

export default Question
