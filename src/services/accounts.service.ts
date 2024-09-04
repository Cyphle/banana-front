import { getMany } from '../helpers/http.ts';
import { AccountSummary } from '../stores/accounts/accounts.type.ts';

// TODO to be tested
export const getAccounts = (): Promise<AccountSummary[]> => {
  return getMany(`accounts`, responseToAccounts)
    .then((response: AccountSummary[]) => {
      console.log(response);
      return response;
    })
}

export const responseToAccounts = (data: any): AccountSummary[] => {
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