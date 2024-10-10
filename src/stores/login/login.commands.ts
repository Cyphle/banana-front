import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from './login.types.ts';
import { login } from '../../services/login.service.ts';

export const useLogin = (onError: (error?: any) => void, onSuccess: () => void) => {
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onError: (error: any) => onError(error),
    onSuccess: async (data: any, variables: any, context: any) => {
      console.log('on success use login');
      console.log(data);
      console.log(variables);
      console.log(context);
      // TODO invalidate queries
      onSuccess();
    },
  });
};