import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <div>
      {data.map((datum) => (
        <SingleQuestion {datum...} />
      ))}
    </div>
  )
}

export default App
