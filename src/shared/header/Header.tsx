import { Menu } from '../menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import bananaLogo from '../../assets/banana.png';

// TODO to be tested
export const Header = () => {
  return (
    <header>
      <div className="banana-title">
        <NavLink to="/">
          <img src={ bananaLogo } className="logo" alt="Banana logo"/>
          <span>Banana</span>
        </NavLink>
      </div>

      <Menu></Menu>
    </header>
  );
}