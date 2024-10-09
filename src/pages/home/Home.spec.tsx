import { render, screen } from '../../../test-utils';
import { Home } from './Home.tsx';

describe('Home', () => {
  test('should render', () => {
    render(<Home />);

    expect(screen.getByText('Banana')).toBeInTheDocument();
  })
});