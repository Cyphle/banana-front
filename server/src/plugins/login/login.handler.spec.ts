import { mockDatabase } from '../../testing/mock-database';
import { loginHandler } from './login.handler';

describe('Login handlers', () => {
  test('should login user', () => {
    const profile = loginHandler(mockDatabase)({ username: 'john.doe', password: 'passpass' });

    expect(profile).toEqual({
      id: 1,
      username: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@banana.fr'
    });
  });
});