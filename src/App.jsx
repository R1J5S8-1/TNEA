import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main_content from './components/Main_content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main_content />
    </>
  )
}

export default App
