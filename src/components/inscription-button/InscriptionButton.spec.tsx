import { render } from '../../../test-utils';
import { screen} from '@testing-library/react'
import { InscriptionButton } from './InscriptionButton.tsx';

describe('Inscription button', () => {
  it('should render the button', () => {
    render(<InscriptionButton/>);

    expect(screen.getByRole('button')).toBeInTheDocument('Blbla');
    // expect(container).toMatchInlineSnapshot(`
    //   <div>
    //     My accounts
    //   </div>
    // `);
  });
});