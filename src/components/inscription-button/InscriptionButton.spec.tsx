import { render } from '../../../test-utils';
import { fireEvent, screen } from '@testing-library/react'
import { InscriptionButton } from './InscriptionButton.tsx';
import { useNavigate } from 'react-router';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('Inscription button', () => {
  it('should render the button', () => {
    render(<InscriptionButton/>);

    expect(screen.getByRole('button')).toHaveTextContent('S\'inscrire');
  });

  it('should prevent from accessing unknown organizations', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
    render(<InscriptionButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockNavigate).toHaveBeenCalledWith('/profiles/creation');
  });
});