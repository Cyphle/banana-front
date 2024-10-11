import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from './login.types.ts';
import { login } from '../../services/login.service.ts';

export const useLogin = (onError: (error?: any) => void, onSuccess: () => void) => {
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onError: (error: any) => onError(error),
    onSuccess: async (data: any, _: any, __: any) => {
      // TODO comment on récupère la réponse ? à priori c'est data mais en fait non...
      console.log('on success use login');
      console.log(data);
      // TODO invalidate queries
      onSuccess();
    },
  });
};