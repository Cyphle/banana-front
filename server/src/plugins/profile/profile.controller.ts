import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';
import { Database } from '../../database/database';
import { CreateProfileCommand, Profile } from './profile.types';
import { database } from '../../config/database.config';
import { getNumberParam, getStringBodyElement, getStringQuery } from '../../helpers/fastify.helpers';

export const getProfileByIdController = (handler: (database: Database) => (id: number) => Profile) => (fastify: FastifyInstance): void => {
  fastify.get('/:userId', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const userId = getNumberParam(request, 'userId');
    const profile = handler(database)(userId);
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  })
}

export const getProfileByEmailController = (handler: (database: Database) => (email: string) => Profile) => (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const email = getStringQuery(request, 'email');
    const profile = handler(database)(email);
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  })
}

export const createProfileController = (handler: (database: Database) => (command: CreateProfileCommand) => Profile) => (fastify: FastifyInstance): void => {
  fastify.post('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const command = {
      username: getStringBodyElement<string>(request, 'username'),
      email: getStringBodyElement<string>(request, 'email'),
      firstName: getStringBodyElement<string>(request, 'firstName'),
      lastName: getStringBodyElement<string>(request, 'lastName')
    }

    const profile = handler(database)(command);
    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  })
}
