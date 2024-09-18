import { useLoaderData } from 'react-router-dom';
import { useFetchAccount } from '../../stores/accounts/accounts.queries.ts';
import { Account, RecurrentTransaction } from '../../stores/accounts/accounts.type.ts';
import { useNavigate } from 'react-router';
import { Transactions } from '../../components/transactions/Transactions.tsx';

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
  const navigate = useNavigate();

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
        <button onClick={ () => navigate(`/accounts/${ account.summary.id }/parameters`) }>Paramètres</button>
      </section>

      // TODO notes
      <p>Notes: au clic sur un des boutons, en fait il faut filtrer au lieu de refaire un appel.
        <br/>
        du coup, il faudrait plutôt un composant d'affichage de tableau.<br/>
        il faudrait un composant qui réfléchir et qui affiche en fonction du clic et des composnats d'affichage.
      </p>

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
        </ul>
      </section>
      <Transactions transactions={ account.transactions }/>
    </div>
  )
}