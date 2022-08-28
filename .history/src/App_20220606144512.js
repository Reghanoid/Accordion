import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const questions = data.map((datum)=> <SingleQuestion questions={...datum} />)
  return <h2>accordion project setup</h2>;
}

export default App;
