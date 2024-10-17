import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test-utils/render';
import { Menu } from './Menu';

jest.mock('../../assets/banana.png', () => 'mocked-banana-image');

describe('Menu Component', () => {
  it('renders all menu items', () => {
    renderWithRouter(<Menu />);

    const menuItems = [
      'Mes comptes',
      'Profil',
      'S\'inscrire',
      'Se connecter'
    ];

    menuItems.forEach(item => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
    });
  });

  it('renders NavLinks with correct paths', () => {
    renderWithRouter(<Menu />);

    const menuItemPaths = [
      { text: 'Mes comptes', path: '/accounts' },
      { text: 'Profil', path: '/profile' },
      { text: 'S\'inscrire', path: '/subscribe' },
      { text: 'Se connecter', path: '/login' }
    ];

    menuItemPaths.forEach(({ text, path }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toHaveAttribute('href', path);
    });
  });

  it('applies correct CSS classes to menu items', () => {
    renderWithRouter(<Menu />);

    const menuItems = screen.getAllByRole('listitem');
    menuItems.forEach(item => {
      expect(item).toHaveClass('p-4', 'hover:bg-[#4553d1]', 'rounded-xl', 'm-2', 'cursor-pointer', 'duration-300', 'hover:text-white');
    });
  });
});
