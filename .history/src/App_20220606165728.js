import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const question = data.map((datum) => {
    const { key, title, info } = datum
    return <SingleQuestion id={key} title={title} info={info} />
  })
  return (
    <main className='container'>
      <header>
        <h1>Questions And Answers About Login</h1>
      </header>
      <div>{question}</div>
    </main>
  )
}

export default App
