import bananeLogo from '../../assets/banane.jpg';
import { Menu } from '../menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="banana-title">
        <NavLink to="/">
          <img src={ bananeLogo } className="logo" alt="Banana logo"/>
        </NavLink>
        <span>Banana - Cool bank account</span>
      </div>

      <Menu></Menu>
    </header>
  );
}