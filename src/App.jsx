import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Caard from './components/Caard'
import Counter from './components/Counter'
import Crud from './components/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
<Card/>
 </>
  )
}

export default App
