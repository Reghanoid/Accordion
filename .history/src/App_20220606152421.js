import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main className='container'>
      <header>Questions and Answers about Login</header>
      <section className='question'>
        <SingleQuestion />
      </section>
    </main>
  )
}

export default App
