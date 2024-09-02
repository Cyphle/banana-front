import { NavLink } from 'react-router-dom';
import './Menu.scss';

export const Menu = () => {
  const navItems = [
    { id: 1, text: 'Mes comptes', path: '/accounts' },
    { id: 2, text: 'Profil', path: '/profile' },
    { id: 3, text: 'S\'inscrire', path: '/subscribe' },
    { id: 4, text: 'Account 1 (temp)', path: '/accounts/1' },
  ];

  return (
    <div className="main-menu">
      <ul>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#4553d1] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            <NavLink
              to={item.path}
              className={ ({ isActive, isPending }) =>
                isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : ''
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}