import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br />
    <br />
      <Nav/>
      <Routes>
      <Route path="/Home" element={<View/>}></Route>
      <Route path="/Addproduct" element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
