// TODO bon c'est à revoir ce truc parce qu'on test rien ici. On construit un fake et on test que le fake marche...
import fastify, { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { getMyProfileExample } from './profile.controller';
import { CustomFastifyRequest } from '../../fastify.types';
import { database } from '../../config/database.config';

function build(opts = {}) {
  const app: FastifyInstance = fastify(opts)

  app.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.database = database
    done()
  });

  getMyProfileExample(app);

  return app
}

describe('Profile controller', () => {
  test('should get profile for given id', (done) => {
    build()
      .inject()
      .get('/')
      .end((err, res) => {
        expect(res?.statusCode).toEqual(200);
        expect(res?.body).toEqual('{"profile":{"id":1,"name":"My profile"}}');
        done();
      });
  });
});
