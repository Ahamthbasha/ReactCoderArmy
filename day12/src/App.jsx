// import React from 'react'
// import Home from './Components/Home'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Contact from './Components/Contact'
// import Dashboard from './Components/Dashboard'
// import Details from './Components/Details'
// import Hero from './Components/hero'
// import Hi from './Components/Hi'
// import Hello from './Components/Hello'

// const App = () => {
//   return (
//     <BrowserRouter>

//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/Contact">Contact</Link>
//       <Link to="/Dashboard">Dashboard</Link>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/Contact" element={<Contact />}></Route>
//       <Route path="/Dashboard" element={<Dashboard />}></Route>
      
//       <Route path="/Details" element={<Details/>}>
//       <Route index element={<Hero />}></Route>
//       <Route path='/Hello' element={<Hello/>}></Route>
//       <Route path="/Hi" element={<Hi />}></Route>
//       </Route>

//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'  // Correct import
import Contact from './Components/Contact'
import Dashboard from './Components/Dashboard'
import Details from './Components/Details'
import Hero from './Components/hero'
import Hi from './Components/Hi'
import Hello from './Components/Hello'

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

      </Routes>
    </BrowserRouter>
  )
}

export default App;


// when you see the html page there you can notice the anchor tag.Behind the scene it use anchor tag.