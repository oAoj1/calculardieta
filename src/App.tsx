import './Style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Resultado from './pages/resultado'

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resultado' element={<Resultado/>}/>
        </Routes>
      </Router>
    </div>
  )
}