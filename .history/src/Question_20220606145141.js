import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main className='question'>
      <div>
        <h4> {props.title} </h4>
        <p> {props.info} </p>
      </div>
    </main>
  )
}

export default Question
