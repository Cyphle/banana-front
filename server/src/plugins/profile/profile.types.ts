export interface Profile {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateProfileCommand {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}