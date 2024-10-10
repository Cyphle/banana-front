import { render, screen } from '../../../test-utils';
import { Registration } from './Registration.tsx';

jest.mock('../../stores/profile/profile.commands.ts', () => ({
  useCreateProfile: jest.fn().mockImplementation(() => ({
    mutate: jest.fn(),
  })),
}));

describe('Registration', () => {
  it('should render', () => {
    render(<Registration />);

    expect(screen.getByText('Crée toi un compte')).toBeInTheDocument();
  });
});