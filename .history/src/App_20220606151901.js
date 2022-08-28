import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main className='container'>
      {data.map((datum) => (
        <SingleQuestion />
      ))}
    </main>
  )
}

export default App
