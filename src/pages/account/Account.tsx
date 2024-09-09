import { useLoaderData } from 'react-router-dom';
import { useFetchAccount } from '../../stores/accounts/accounts.queries.ts';
import { Account, AccountTransaction, RecurrentTransaction } from '../../stores/accounts/accounts.type.ts';

interface AccountParams {
  accountId: string;
}

export async function accountParamsLoader({ params }: { params: { [key: string]: string }}): Promise<AccountParams> {
  return {
    accountId: params.id
  };
}

// TODO to be tested
export const AccountPage = () => {
  const params = useLoaderData() as AccountParams;
  console.log(params);

  const { isPending, isError, data, error } = useFetchAccount(parseInt(params.accountId));

  // // TODO il faut faire un high order component avec template pour faire du UI skeleton avec is loading et is error
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: { error.message }</span>
  }

  const account = data as Account;

  return (
    <div>
      <h1>{ account.summary.name }</h1>
      <h2>{ account.summary.date }</h2>

      <section className="actions">
        <button>Toutes les opérations</button>
        <button>Crédits</button>
        <button>Dépenses</button>
        <button>Budgets</button>
        <button>Charges</button>
        <button>Paramètres</button>
      </section>

      <section className="summary">
        <div className="indicator">
          <span className="indicator__label">Montant début de mois</span>
          <span className="indicator__value">1000€</span>
        </div>
        <div className="indicator">
          <span className="indicator__label">Montant actuel</span>
          <span className="indicator__value">1000€</span>
        </div>
        <div className="indicator">
          <span className="indicator__label">Montant projeté fin de mois</span>
          <span className="indicator__value">1000€</span>
        </div>
      </section>

      <section className="expenses">

      </section>

      <ul>
        { (account.recurrentTransactions).map((transaction: RecurrentTransaction) => (
          <li key={ transaction.id }>
            <span>{ transaction.appliedAt }</span>
            <span>{ transaction.appliedAt }</span>
            <span>{ transaction.description }</span>
            <span>{ transaction.amount }</span>
          </li>
        ))
        }
        { (account.transactions).map((transaction: AccountTransaction) => (
          <li key={ transaction.id }>
            <span>{ transaction.executedAt }</span>
            <span>{ transaction.appliedAt }</span>
            <span>{ transaction.description }</span>
            <span>{ transaction.amount }</span>
          </li>
        ))
        }
      </ul>
    </div>
  )
}