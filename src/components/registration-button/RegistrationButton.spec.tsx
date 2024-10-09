import { render } from '../../../test-utils';
import { fireEvent, screen } from '@testing-library/react'
import { RegistrationButton } from './RegistrationButton.tsx';
import { useNavigate } from 'react-router';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('Inscription button', () => {
  it('should render the button', () => {
    render(<RegistrationButton/>);

    expect(screen.getByRole('button')).toHaveTextContent('S\'inscrire');
  });

  it('should prevent from accessing unknown organizations', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
    render(<RegistrationButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockNavigate).toHaveBeenCalledWith('/registration');
  });
});