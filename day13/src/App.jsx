import React from 'react'
import Home from "../src/Components/Home"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'  // Correct import
import Contact from '../src/Components/Contact'
import Dashboard from '../src/Components/Dashboard'
import Details from '../src/Components/Details'
import Hero from '../src/Components/hero'
import Hi from '../src/Components/Hi'
import Hello from '../src/Components/Hello'
import Github from './Components/Github'

const App = () => {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        
        <Route path="/Details" element={<Details />}>
          <Route index element={<Hero />} /> {/* Hero is the default nested route */}
          <Route path="Hello" element={<Hello />} />
          <Route path="Hi" element={<Hi />} />
        </Route>

        <Route path="/Github/:name" element={<Github />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
