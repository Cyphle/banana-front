// import { render, screen } from '../../../test-utils';
// import { Header } from './Header.tsx';
// import { fireEvent, waitFor } from '@testing-library/react';
// import { useUser } from '../../contexts/user/UserContext.tsx';

// jest.mock('../../contexts/user/UserContext.tsx', () => ({
//   useUser: jest.fn().mockImplementation(() => ({
//     userState: { firstName: 'John', lastName: 'Doe' },
//   })),
// }));

// describe('Header', () => {
//   beforeEach(() => {
//     (useUser as jest.Mock).mockClear();
//   });

//   test('should render header', () => {
//     render(<Header />);

//     const bananaTitle = screen.getByText('Banana');
//     expect(bananaTitle).toBeInTheDocument();

//     const logo = screen.getByAltText('Banana logo') as HTMLImageElement;
//     expect(logo).toBeInTheDocument();
//     expect(logo.src).toContain('banana.png');

//     const userInfo = screen.getByText('John Doe');
//     expect(userInfo).toBeInTheDocument();

//     const menu = screen.getByRole('navigation');
//     expect(menu).toBeInTheDocument();
//   });

//   test('should navigate to home when logo is clicked', async () => {
//     const { container } = render(<Header />);

//     const logoLink = container.querySelector('.banana-title a');
//     expect(logoLink).toBeInTheDocument();
//     expect(logoLink).toHaveAttribute('href', '/');

//     fireEvent.click(logoLink as HTMLElement);

//     await waitFor(() => {
//       expect(window.location.pathname).toBe('/');
//     });
//   });

//   test('should render user information from useUser hook', () => {
//     (useUser as jest.Mock).mockImplementation(() => ({
//       userState: { firstName: 'Jane', lastName: 'Smith' },
//     }));

//     render(<Header />);

//     const userInfo = screen.getByText('Jane Smith');
//     expect(userInfo).toBeInTheDocument();
//   });
// });


