import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navConfig } from '../../config/navConfig';
import { iconRegistry } from '../../config/iconRegistry';
import { NavEntry } from '../../config/menuTypes';
import { useAuth } from '../../hooks/useAuth';  // seu hook de autenticação
import './Nav.css';

// Esse componente é um menu de navegação que exibe links para diferentes seções do aplicativo.

export function Nav() {
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();
  

  // Filtra login/logout conforme autenticação
  const items = navConfig
    .filter(item => !(item.key === 'login'  && isAuthenticated))
    .filter(item => !(item.key === 'logout' && !isAuthenticated))
    .map(item => {
      // se for logout, injeta o onClick do hook
      if (item.key === 'logout') {
        return { ...item, onClick: logout };
      }
      return item;
    });

  return (
    <nav className="nav">
      {items.map((item: NavEntry) => {
        const Icon = iconRegistry[item.icon];
        const content = (
          <>
            {Icon && <Icon size={18} className="nav-link-icon" color="currentColor" />}
            <span className="nav-link-label">{item.label}</span>
          </>
        );

        if (item.onClick) {
          return (
            <button
              key={item.key}
              onClick={item.onClick}
              className="nav-link"
            >
              {content}
            </button>
          );
        }

        return (
          <Link
            key={item.key}
            to={item.path!}
            className={`nav-link${pathname === item.path ? ' active' : ''}`}
          >
            {content}
          </Link>
        );
      })}
      <span className="nav-path">{pathname}</span>
    </nav>
  );
}
