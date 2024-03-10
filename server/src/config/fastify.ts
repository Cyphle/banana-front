import fastify, { FastifyInstance } from 'fastify';

export const initFastify = (): FastifyInstance => {
  return fastify({
    logger: true
  });
}