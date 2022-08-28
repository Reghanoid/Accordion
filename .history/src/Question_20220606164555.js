import { display, style } from '@mui/system'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expandText, setExpandText] = useState(true)

  const toggleInfo = () => {}

  return (
    <>
      <section className='question'>
        <h4> {props.title} </h4>
        <button className='btn' onClick={toggleInfo}>
          <AiOutlinePlus />
        </button>
        <p style={expandText ? { display: 'block' } : { display: 'none' }}>
          {' '}
          {props.info}{' '}
        </p>
      </section>
    </>
  )
}

export default Question
