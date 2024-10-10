export interface Profile {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateProfileRequest {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}