import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Sidebar from './components/Sidebar';
import Start from './pages/Start';
import More from './pages/More';
import Breath from './pages/Breath';
import Detail from './pages/Detail';
import './styles/dark-theme.css'; 
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <ThemeToggle />
          <main style={{ flex: 1, background: 'var(--bg-primary)', minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/more" element={<More />} />
              <Route path="/breath/:category/:type/:duration" element={<Breath />} />
              <Route path="/detail/:type" element={<Detail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;