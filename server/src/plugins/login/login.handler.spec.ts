import { mockDatabase } from '../../testing/mock-database';
import { loginHandler } from './login.handler';

describe('Login handlers', () => {
  test('should login user', () => {
    const profile = loginHandler(mockDatabase)('john.doe');

    expect(profile).toEqual({
      id: 1,
      username: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@banana.fr'
    });
  });
});