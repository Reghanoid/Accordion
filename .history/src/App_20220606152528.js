import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main className='container'>
      <header>Questions and Answers about Login</header>
      <section className='question'>
        <header>
          <SingleQuestion />
        </header>
      </section>
    </main>
  )
}

export default App
