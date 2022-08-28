import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <div>
      {data.map((datum) => (
        <SingleQuestion title={datum.title} />
      ))}
    </div>
  )
}

export default App
