import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { UserInfo } from './user.types';
import { getUserInfo } from '../../services/user.service';
import { Option } from '../../helpers/option';
export const useUserInfo = (): UseQueryResult<Option<UserInfo>, Error> => {
  return useQuery({
    queryKey: ['user', 'info'],
    queryFn: getUserInfo
  });
}