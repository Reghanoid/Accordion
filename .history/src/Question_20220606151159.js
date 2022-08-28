import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main>
      <div>
        <header>Questions and Answers about Login</header>
        <div className='section'>
          <h4> {props.title} </h4>
          <p> {props.info} </p>
        </div>
      </div>
    </main>
  )
}

export default Question
