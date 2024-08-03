import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ToDo } from './ToDo'
import Parent from './Parent'

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Landing Page</li></Link>
        <Link to="/Home"><li>Home Page</li></Link>
        <Link to="/todo"><li>To-Do List</li></Link>
        <Link to="/counter"><li>Counter</li></Link>
      </ul>
    </nav>
  )
}

function App() { // changes or re-render


  return ( // re-render
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Landing page</h1>} />
          <Route path="/Home" element={<h1>Home page</h1>} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/counter" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
