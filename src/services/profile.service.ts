import { CreateProfileRequest, Profile } from '../stores/profile/profile.ts';
import { post } from '../helpers/http.ts';

// TODO to be tested
export const createProfile = (request: CreateProfileRequest): Promise<Profile> => {
  return post<CreateProfileRequest, Profile>('/profiles', request, responseToProfile);
}

export const responseToProfile = (data: any): Profile => {
  return {
    username: data.username,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
  }
}