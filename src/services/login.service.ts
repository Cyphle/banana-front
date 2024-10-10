import { post } from '../helpers/http.ts';
import { LoginRequest, LoginResponse } from '../stores/login/login.types.ts';

// TODO to be tested
export const login = (request: LoginRequest): Promise<LoginResponse> => {
  return post<LoginRequest, LoginResponse>('login', request, responseToLogin);
}

export const responseToLogin = (data: any): LoginResponse => {
  return {
    username: data.username,
  }
}