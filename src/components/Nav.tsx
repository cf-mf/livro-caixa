// components/Nav.tsx

import { Link } from 'react-router-dom'

export function Nav(){
    return(
        <nav className="nav">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/login">Login</Link>
            <Link to="/registros">Registros</Link>
        </nav>
    );
}