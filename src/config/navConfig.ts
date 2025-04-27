import { NavEntry } from './menuTypes';


/**
 * Configuração do Nav, com rota (path) ou ação (onClick)
 */
export const navConfig: NavEntry[] = [
  { key: 'home',  path: '/',      label: 'Início', icon: 'Home' },
  { key: 'about', path: '/about', label: 'Sobre',  icon: 'Info'  },
  {
    key: 'login',
    path: '/login',
    label: 'Login',
    icon: 'LogIn',
    onClick: undefined
  },
  {
    key: 'logout',
    label: 'Sair',
    icon: 'LogOut',
    onClick: undefined
  },
];
