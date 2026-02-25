import './App.css'
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Breath from './pages/Breath'

function App() {
  return (
    <div className='app'>
      <Router>
        <Sidebar />
        <div className='main-container'>
          <Routes>
            import {Navigate} from "react-router-dom";

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path='/technique/:category/:type' element={<Breath />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App