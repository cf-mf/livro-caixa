// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login/Login';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';

export default function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Nav />
        <SideMenu />
        <main className="main page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
