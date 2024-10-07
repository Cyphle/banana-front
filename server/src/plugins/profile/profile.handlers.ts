import { Database } from '../../database/database';
import { CreateProfileCommand, Profile } from './profile.types';

export const getProfileByIdHandler = (database: Database) => (id: number): Profile => {
  return database.readOneById('profiles', id);
}

export const getProfileByEmailHandler = (database: Database) => (email: string): Profile => {
  return database.readOneByField('profiles', 'email', email);
}

export const createProfileHandler = (database: Database) => (command: CreateProfileCommand): Profile => {
  const profiles = database.read<Profile>('profiles')
    .sort((a: Profile, b: Profile) => a.id - b.id)
    .reverse();

  const newProfile = {
    id: (profiles[0]?.id ?? 0) + 1,
    ...command
  };

  database.create('profiles', newProfile);

  return newProfile;
}