import { getMany, getOne } from '../helpers/http.ts';
import { Account, AccountSummary, AccountTransaction, Budget } from '../stores/account/account.types.ts';

// TODO to be tested
export const getAccounts = (): Promise<AccountSummary[]> => {
  return getMany(`accounts`, responseToAccounts);
}

export const responseToAccounts = (data: any): AccountSummary[] => {
  return data.map((account: any) => toAccountSummary(account));
}

export const getAccount = (id: number): Promise<Account> => {
  return getOne(`accounts/${ id }`, responseToAccount);
}

export const responseToAccount = (data: any): Account => {
  return {
    summary: toAccountSummary(data),
    budgets: data.budgets.map((budget: any) => toBudget(budget)),
    transactions: data.transactions.map((transaction: any) => toTransaction(transaction)),
    parameters: data.parameters
  };
}

const toBudget = (budget: any): Budget => {
  return {
    id: budget.id,
    initialAmount: budget.initialAmount,
    actualAmount: budget.actualAmount,
    name: budget.name,
    startDate: budget.startDate,
    endDate:budget.endDate,
    frequency: budget.frequency,
  }
}

const toTransaction = (transaction: any): AccountTransaction => {
  return {
    id: transaction.id,
    executedAt: transaction.executedAt,
    appliedAt: transaction.appliedAt,
    type: transaction.type,
    description: transaction.description,
    amount: transaction.amount,
    startDate: transaction.startDate,
    endDate: transaction.endDate,
    budgetId: transaction.budgetId,
  }
}

const toAccountSummary = (account: any): AccountSummary => {
  return {
    id: account.id,
    name: account.name,
    type: account.type,
    period: {
      from: account.period.from,
      to: account.period.to
    },
    startingBalance: account.startingBalance,
    currentBalance: account.balance,
    projectedBalance: account.projectedBalance,
  }
}