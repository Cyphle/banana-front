import { Menu } from '../menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
      <div className="banana-title">
        <NavLink to="/">
          <FontAwesomeIcon icon={faMoneyBill1} />
        </NavLink>

        <span>Banana - Cool bank account manager</span>
      </div>

      <Menu></Menu>
    </header>
  );
}