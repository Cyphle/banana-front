import { render as testingLibraryRender } from '@testing-library/react';
import { Profile } from './Profile.tsx';

describe('Profile', () => {
  it('should render', () => {
    const { container } = testingLibraryRender(<Profile/>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        My Profile
      </div>
    `);
  });
});