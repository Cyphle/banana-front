import { Menu } from '../menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

// TODO to be tested
export const Header = () => {
  return (
    <header>
      <div className="banana-title">
        <NavLink to="/">
          <FontAwesomeIcon icon={faMoneyBill1} />
          <span>Banana - Cool bank account manager</span>
        </NavLink>
      </div>

      <Menu></Menu>
    </header>
  );
}