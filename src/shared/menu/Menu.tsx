import './Menu.scss';
import { NavLink } from 'react-router-dom';
import { RouteDefinition } from '../../Routes.tsx';
import { useUser } from '../../contexts/user/user.context.tsx';

export const Menu = ({ routes }: { routes: RouteDefinition[] }) => {
  const user = useUser();

  console.log('menu', user);

  const navItems = routes
  .filter((route: RouteDefinition) => !!route.id)
  .map((route: RouteDefinition) => ({
    id: route.id,
    name: route.name,
    path: `/${route.path}`
  }));

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
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}