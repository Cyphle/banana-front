import { Database } from '../../database/database';
import { CreateProfileRequest, Profile } from './profile.types';

export const getProfileByUsernameHandler = (database: Database) => (username: string): Profile => {
  return database.readOneByField('profiles', 'username', username);
}

export const createProfileHandler = (database: Database) => (command: CreateProfileRequest): Profile => {
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