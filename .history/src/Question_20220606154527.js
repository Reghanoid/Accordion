import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expandText, setExpandText] = useState(false)

  const toggleInfo = () => {
    alert('working')
  }

  return (
    <>
      <section className='question'>
        <h4> {props.title} </h4>
        <button
          className='btn'
          onClick={toggleInfo}
          style={{ display: 'flex' }}
        >
          <AiOutlinePlus />
        </button>
        <p style={{ display: 'none' }}> {props.info} </p>
      </section>
    </>
  )
}

export default Question
