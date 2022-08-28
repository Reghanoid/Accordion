import { display, style } from '@mui/system'
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expandText, setExpandText] = useState(true)

  const toggleInfo = () => {
    if (expandText === true) {
      setExpandText(false)
    } else {
      setExpandText(true)
    }
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
          {expandText ? <AiOutlineMinus /> : <AiOutlinePlus />}
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
