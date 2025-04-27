// components/Header.tsx

// esse é um cabeçalho que exibe o logotipo e o título do aplicativo.

import { Logo } from "../../Logo";
import './Header.css';
export function Header() {
  return (
    <header className="header">
      <div className="logo-fixed">
        <Logo />
      </div>
      <div className="header-center">
        <h1 className="header-title">Livro Caixa</h1>
      </div>
    </header>
  );
}
