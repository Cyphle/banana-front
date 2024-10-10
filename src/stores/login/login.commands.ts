import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from './login.types.ts';
import { login } from '../../services/login.service.ts';

export const useLogin = (onError: (error?: any) => void, onSuccess: () => void) => {
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onError: (error: any) => onError(error),
    onSuccess: async () => {
      // TODO invalidate queries
      onSuccess();
    },
  });
};