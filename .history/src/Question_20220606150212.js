import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main className='container'>
      <h4> {props.title} </h4>
      <p> {props.info} </p>
    </main>
  )
}

export default Question
