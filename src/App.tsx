import './Style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}