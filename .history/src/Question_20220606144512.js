import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  return (
    <>
      <div>
        <h2> {props.title} </h2>
        <p> {props.info} </p>
      </div>
    </>
  )
}

export default Question
