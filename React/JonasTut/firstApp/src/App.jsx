import './App.css'
import { useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('Hello World')

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data.slip.advice)
  }

  return (
    <>  
    <h1>{advice}</h1>
    <button onClick={getAdvice}>get advice</button>
    </>
  )
}

export default App
