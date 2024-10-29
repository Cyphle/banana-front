import { FastifyInstance, FastifyReply } from 'fastify';
import { Database } from '../../database/database';
import { CustomFastifyRequest } from '../../fastify.types';
import { UserInfo } from './user.types';

export const userInfoController = (handler: (database: Database) => (username: string) => UserInfo | undefined) => (fastify: FastifyInstance): void => {
  fastify.get('/info', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const connectedProfile = request.session.get('user');

    if (connectedProfile === undefined) {
      reply.code(403);
    }

    const info = handler(request.database!!)(connectedProfile.username);

    if (!!info) {
      reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ ...info });
    } else {
      reply.code(403);
    }
  });
}
