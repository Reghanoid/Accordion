import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
  const [expand, setExpand] = useState(false)

  return (
    <main className='container'>
      <div>
        <header>Questions and Answers about Login</header>
        <div className=''>
          <h4> {props.title} </h4>
          <p> {props.info} </p>

          <button className='btn'>
            {' '}
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Question
