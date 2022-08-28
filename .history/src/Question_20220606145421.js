import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main>
      <div className='question'>
        <header className=''>Questions and Answers About Login</header>
        <h4> {props.title} </h4>
        <p> {props.info} </p>
      </div>
    </main>
  )
}

export default Question
