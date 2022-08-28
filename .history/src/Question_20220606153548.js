import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <section className='question'>
        <h4> {props.title} </h4>
        <button className='btn'>
          <AiOutlinePlus />
        </button>
        <p> {props.info} </p>
      </section>
    </>
  )
}

export default Question
