import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ title, info }) => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
      </header>
      <p> {info} </p>
    </article>
  )
}

export default Question

{
  /* <section className='question'>
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
      </section> */
}
