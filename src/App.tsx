import React from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registros } from './pages/Registros';

function App() {
  return (
    <Router>
      <Header />
        <Nav />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registros" element={<Registros />} />
            </Routes>
          </main>
          <Footer />
    </Router>
  );
}

export default App;
