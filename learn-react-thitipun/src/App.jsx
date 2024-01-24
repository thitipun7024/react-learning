import { useState } from 'react'
import './App.css'
import Mybutton from './MyComponent/Mybutton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mybutton />
    </>
  )
}

export default App
