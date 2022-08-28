import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <div>
      {data.map((datum) => (
        <SingleQuestion key={datum.id} title={datum.title} info={datum.info} />
      ))}
    </div>
  )
}

export default App
