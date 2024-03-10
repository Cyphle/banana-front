import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';

export const getMyProfile = (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile: request.database?.getMyProfile() });
  })
}