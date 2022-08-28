import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expandText, setExpandText] = useState(false)

  const toggleInfo = () => {}

  return (
    <>
      <section id={props.id} className='question'>
        <h4> {props.title} </h4>
        <button className='btn' onClick={toggleInfo}>
          <AiOutlinePlus />
        </button>
        <p style={{ display: 'none' }}> {props.info} </p>
      </section>
    </>
  )
}

export default Question
