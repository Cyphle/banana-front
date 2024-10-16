import { Database } from '../../database/database';
import { Profile } from '../profile/profile.types';
import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';
import { getStringBodyElement } from '../../helpers/fastify.helpers';
import { database } from '../../config/database.config';
import { LoginRequest } from './login.types';

export const loginController = (handler: (database: Database) => (command: LoginRequest) => Profile) => (fastify: FastifyInstance): void => {
  fastify.post('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const command = {
      username: getStringBodyElement<string>(request, 'username'),
      password: getStringBodyElement<string>(request, 'password')
    }
    
    const profile = handler(database)(command);

    // @ts-ignore
    request.session.user = profile.username;

    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  })
}
