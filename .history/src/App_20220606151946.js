import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main className='container'>
      {data.map((datum) => (
        <SingleQuestion question={datum} />
      ))}
    </main>
  )
}

export default App
