import { AccountTransaction } from '../../stores/accounts/accounts.type.ts';

// TODO il faudrait un composant pour les transactions et un pour les transactions recurrentes
export interface TransactionsProps {
  transactions: AccountTransaction[];
}

export const Transactions = (props: TransactionsProps) => {
  return (
    <section className="expenses">
      <ul>
        { (props.transactions).map((transaction: AccountTransaction) => (
          <li key={ transaction.id }>
            <span>{ transaction.executedAt }</span>
            <span>{ transaction.appliedAt }</span>
            <span>{ transaction.description }</span>
            <span>{ transaction.amount }</span>
          </li>
        ))
        }
      </ul>
    </section>
  )
}