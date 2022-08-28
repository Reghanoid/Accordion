import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main className='container'>
      <div className='section'>
        <header>Questions and Answers about Login</header>
        <div className='question'>
          <h4> {props.title} </h4>
          <p> {props.info} </p>
        </div>
      </div>
    </main>
  )
}

export default Question
