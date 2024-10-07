import { createProfileController, getProfileByEmailController, getProfileByIdController } from './profile.controller';
import { mockFastify } from '../../testing/mock-fastify';
import { createProfileHandler, getProfileByEmailHandler, getProfileByIdHandler } from './profile.handlers';

describe('Profile controller', () => {
  test('should get profile for given id', (done) => {
    mockFastify({}, [getProfileByIdController(getProfileByIdHandler)])
      .inject()
      .get('/1')
      .end((err, res) => {
        expect(res?.statusCode).toEqual(200);
        expect(res?.body).toEqual('{"profile":{"id":1,"username":"john.doe","firstName":"John","lastName":"Doe","email":"john.doe@banana.fr"}}');
        done();
      });
  });

  test('should get profile for given email', (done) => {
    mockFastify({}, [getProfileByEmailController(getProfileByEmailHandler)])
      .inject()
      .get('/')
      .query({ email: 'john.doe@banana.fr' })
      .end((err, res) => {
        expect(res?.statusCode).toEqual(200);
        expect(res?.body).toEqual('{"profile":{"id":1,"username":"john.doe","firstName":"John","lastName":"Doe","email":"john.doe@banana.fr"}}');
        done();
      });
  });

  test('should create a new profile', (done) => {
    mockFastify({}, [createProfileController(createProfileHandler)])
      .inject()
      .post('/')
      .body({
        username: 'john.doe',
        email: 'johndoe@banana.fr',
        firstName: 'John',
        lastName: 'Doe'
      })
      .end((err, res) => {
        expect(res?.statusCode).toEqual(201);
        done();
      });
  });
});
