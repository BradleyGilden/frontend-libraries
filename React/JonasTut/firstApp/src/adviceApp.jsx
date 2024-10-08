import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('Hello World')
  const [readCount, setReadCount] = useState(0)

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    // access internal state variable in set<StateName>(callback(stateVariable))
    setReadCount((count) => count + 1)
    setAdvice(data.slip.advice)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <>  
    <h1>{advice}</h1>
    <button onClick={getAdvice}>get advice</button>
    <Message count={readCount} />
    </>
  )

  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count}</strong> pieces of advice
      </p>
    )
  }
}

export default App
