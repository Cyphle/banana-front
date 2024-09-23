import { DisplayableTransaction } from '../components/transactions/Transactions.tsx';
import { AccountTransaction, RecurrentTransaction } from '../stores/accounts/accounts.type.ts';

// TODO to be tested
export const fromAccountTransactionToDisplayableTransaction = (transaction: AccountTransaction): DisplayableTransaction => {
  return {
    id: transaction.id,
    executedAt: transaction.executedAt,
    appliedAt: transaction.appliedAt,
    type: transaction.type,
    description: transaction.description,
    amount: transaction.amount,
  }
}

export const fromAccountTransactionsToDisplayableTransactions = (transactions: AccountTransaction[]): DisplayableTransaction[] => {
  return transactions.map((transaction: AccountTransaction) => fromAccountTransactionToDisplayableTransaction(transaction));
}

export const fromRecurrentTransactionToDisplayableTransaction = (transaction: RecurrentTransaction): DisplayableTransaction => {
  return {
    id: transaction.id,
    executedAt: transaction.appliedAt,
    appliedAt: transaction.appliedAt,
    type: transaction.type,
    description: transaction.description,
    amount: transaction.amount,
  }
}

export const fromRecurrentTransactionsToDisplayableTransactions = (transactions: RecurrentTransaction[]): DisplayableTransaction[] => {
  return transactions.map((transaction: RecurrentTransaction) => fromRecurrentTransactionToDisplayableTransaction(transaction));
}