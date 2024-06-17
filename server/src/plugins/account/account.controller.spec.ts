import fastify from 'fastify';
import { describe, expect, test } from '@jest/globals';


// TODO bon c'est à revoir ce truc parce qu'on test rien ici. On construit un fake et on test que le fake marche...
function build(opts = {}) {
  const app = fastify(opts)
  app.get('/accounts', async function (request, reply) {
    return [{ id: 1, name: 'Account 2' }]
  });

  return app
}

describe('Account controller', () => {
  test('should get accounts', (done) => {
    build()
      .inject()
      .get('/')
      .end((err, res) => {
        expect(res?.statusCode).toEqual(200);
        expect(res?.body).toEqual('[{"id":1,"name":"Account 1"}]');
        done();
      });
  });
});
