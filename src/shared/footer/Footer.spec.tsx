import { Footer } from './Footer.tsx';
import { render } from '../../../test-utils';

describe('Footer', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchInlineSnapshot(`
      <footer>
        <p>
          © 2021 Banana
        </p>
      </footer>
    `);
  });
});