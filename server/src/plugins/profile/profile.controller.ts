import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';
import { Database } from '../../database/database';
import { CreateProfileRequest, Profile } from './profile.types';
import { database } from '../../config/database.config';
import { getStringBodyElement, getStringQuery } from '../../helpers/fastify.helpers';

export const getProfileByUsernameController = (handler: (database: Database) => (username: string) => Profile) => (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const connectedProfile = request.session.get('user');
    const profile = handler(database)(connectedProfile.username);
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  });
}

export const createProfileController = (handler: (database: Database) => (command: CreateProfileRequest) => Profile) => (fastify: FastifyInstance): void => {
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
