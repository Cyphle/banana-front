import { Menu } from '../menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import bananaLogo from '../../assets/banana.png';
import { useUser } from '../../contexts/user/UserContext.tsx';

export const Header = () => {
  const { userState } = useUser();

  return (
    <header>
      <div className="banana-title">
        <NavLink to="/">
          <img src={ bananaLogo } className="logo" alt="Banana logo"/>
          <span>Banana</span>
        </NavLink>
      </div>

      <div className="user-info">
        { userState.firstName } { userState.lastName }
      </div>

      <Menu></Menu>
    </header>
  );
}