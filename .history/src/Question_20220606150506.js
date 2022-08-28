import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <main>
      <div className='container'>
        <header>
          <h4> {props.title} </h4>
          <p> {props.info} </p>
        </header>
      </div>
    </main>
  )
}

export default Question
