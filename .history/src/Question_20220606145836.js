import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main className='container'>
      <header className='question'>Questions and Answers About Login</header>
      <div>
        <h4> {props.title} </h4>
        <p> {props.info} </p>
      </div>
    </main>
  )
}

export default Question
