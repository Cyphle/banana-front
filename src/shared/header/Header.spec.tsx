import { NavLink } from 'react-router-dom';
import { screen } from '../../../test-utils';
import { renderWithRouter } from '../../../test-utils/render';
import { useUser } from '../../contexts/user/UserContext';
import { Header } from './Header';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    NavLink: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
  };
});

jest.mock('../../contexts/user/UserContext', () => ({
  useUser: jest.fn(),
}));

jest.mock('../menu/Menu', () => ({
  Menu: () => <div data-testid="menu-component">Menu Component</div>,
}));

jest.mock('../../assets/banana.png', () => 'mocked-banana-image');

describe('Header Component', () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      userState: { firstName: 'John', lastName: 'Doe' },
    });
  });

  it('renders the header with correct elements', () => {
    renderWithRouter(<Header />);

    // Check if the logo and title are rendered
    const logoLink = screen.getByRole('link', { name: /banana/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    // Check if user info is rendered
    const userInfo = screen.getByText('John Doe');
    expect(userInfo).toBeInTheDocument();

    // Check if Menu component is rendered
    const menuComponent = screen.getByTestId('menu-component');
    expect(menuComponent).toBeInTheDocument();
  });

  it('uses NavLink for the logo', () => {
    renderWithRouter(<Header />);
    expect(NavLink).toHaveBeenCalledWith(
      expect.objectContaining({ to: '/' }),
      expect.anything()
    );
  });

  it('displays user information from useUser hook', () => {
    (useUser as jest.Mock).mockReturnValue({
      userState: { firstName: 'Jane', lastName: 'Smith' },
    });

    renderWithRouter(<Header />);

    const userInfo = screen.getByText('Jane Smith');
    expect(userInfo).toBeInTheDocument();

    expect(useUser).toHaveBeenCalled();
  });
});

