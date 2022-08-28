import React, { useState } from 'react'
import questions from './data'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <main>
        <div>
          <h3>Questions and Answers about Login</h3>
          <section>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
