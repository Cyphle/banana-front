import { createProfileController, getProfileByUsernameController } from './profile.controller';
import { mockFastify } from '../../testing/mock-fastify';
import { createProfileHandler, getProfileByUsernameHandler } from './profile.handlers';

describe('Profile controller', () => {
  test('should get profile for given username', (done) => {
    mockFastify({}, [getProfileByUsernameController(getProfileByUsernameHandler)])
      .inject()
      .get('/')
      .query({ username: 'john.doe' })
      .end((err, res) => {
        expect(res?.statusCode).toEqual(200);
        expect(JSON.parse(res?.body ?? '{}')).toEqual({ profile: { id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr' } });
        done();
      });
  });

  test('should create a new profile', (done) => {
    mockFastify({}, [createProfileController(createProfileHandler)])
      .inject()
      .post('/')
      .body({
        username: 'john.doe',
        email: 'john.doe@banana.fr',
        firstName: 'John',
        lastName: 'Doe'
      })
      .end((err, res) => {
        expect(res?.statusCode).toEqual(201);
        done();
      });
  });
});
