import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path="/login" element={<div>Login</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
