import { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { CustomFastifyRequest } from './fastify.types';

export const decorateWithUser = (fastify: FastifyInstance): void => {
  fastify.log.info('Decorating with user');
  fastify.decorateRequest('user', null);

  fastify.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.user = '';

    // @ts-ignore
    // console.log('session id', req.session);

    // @ts-ignore
    // console.log('in decorator', req.session.user);

    // @ts-ignore
    // req.session.user = { name: 'max' };

    // req.session.user = { username: '' };
    done()
  });
}