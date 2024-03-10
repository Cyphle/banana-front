import { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { database } from './database';
import { CustomFastifyRequest } from '../fastify.types';

export const decorateWithDatabase = (fastify: FastifyInstance): void => {
  fastify.log.info('Decorating with database');
  fastify.decorateRequest('database', null);
  fastify.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.database = database
    done()
  });
}