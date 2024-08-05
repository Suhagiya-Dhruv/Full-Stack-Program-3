import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ToDo } from './ToDo'
import Parent from './Parent'
import Counter from './counterRedux'
import { Provider } from 'react-redux'
import store from './store/store'

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Landing Page</li></Link>
        <Link to="/Home"><li>Home Page</li></Link>
        <Link to="/todo"><li>To-Do List</li></Link>
        <Link to="/counter"><li>Counter</li></Link>
        <Link to="/redux"><li>Counter with redux</li></Link>
      </ul>
    </nav>
  )
}

function App() { // changes or re-render


  return ( // re-render
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Landing page</h1>} />
          <Route path="/Home" element={<h1>Home page</h1>} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/counter" element={<Parent />} />
          <Route path="/redux" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
