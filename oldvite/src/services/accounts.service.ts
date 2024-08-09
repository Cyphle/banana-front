import { getMany } from '../helpers/http.ts';
import { Account } from '@/stores/accounts/accounts.type.ts';

export const getAccounts = (): Promise<Account[]> => {
  return getMany(`accounts`, responseToAccounts)
    .then((response: Account[]) => {
      console.log(response);
      return response;
    })
}

export const responseToAccounts = (data: any): Account[] => {
  return data.map((account: any) => {
    return {
      id: account.id,
      name: account.name,
      type: account.type,
      balance: account.balance,
      projectedBalance: account.projectedBalance,
    };
  });
}