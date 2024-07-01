import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';

export const getMyProfile = (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile: request.database?.readOneById('profiles', 1) });
  })
}

export const getMyProfileExample = (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    console.log(request.database);
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile: { id: 1, name: 'My profile'} });
  })
}