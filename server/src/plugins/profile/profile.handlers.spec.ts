import { getProfileByUsernameHandler } from './profile.handlers';
import { mockDatabase } from '../../testing/mock-database';
import { Profile } from './profile.types';

describe('Profile handlers', () => {
  test('should get profile by username', () => {
    const profile = getProfileByUsernameHandler(mockDatabase)('john.doe');

    expect(profile).toEqual({ id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr' });
  });

  test('should return index 1 when there is no profile', () => {
    const profiles: Profile[] = []
      .sort((a: Profile, b: Profile) => a.id - b.id)
      .reverse();

    const id = (profiles[0]?.id ?? 0) + 1;

    expect(id).toEqual(1);
  });

  test('should return index +1 when there are some profiles', () => {
    const profiles: Profile[] = [{
      id: 1,
      username: 'jondoe',
      email: 'john.doe@banana.fr',
      firstName: 'John',
      lastName: 'Doe'
    }]
      .sort((a: Profile, b: Profile) => a.id - b.id)
      .reverse();

    const id = (profiles[0]?.id ?? 0) + 1;

    expect(id).toEqual(2);
  });
});