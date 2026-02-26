import { BrowserRouter, Routes, Route } from 'react-router-dom';
import More from './pages/More';
import Breath from './pages/Breath';
import Sidebar from './components/Sidebar';
import './App.css';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/more" element={<More />} />
            <Route path="/breath/:type" element={<Breath />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;