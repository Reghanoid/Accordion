import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main>
      <div className='container'>
        <h2></h2>
        <div className='section'>
          <h4 className='question'> {props.title} </h4>
          <p> {props.info} </p>
        </div>
      </div>
    </main>
  )
}

export default Question
