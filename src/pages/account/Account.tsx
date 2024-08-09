import { useLoaderData } from 'react-router-dom';

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

  return (
    <div>
      My account number { params.accountId }

      Il faut
      <ul>
        <li>une sous barre de menu</li>
        <li>pour changer de vue : toutes les opérations, budgets, charges, etc</li>
        <li>pouvoir ajouter une dépenses, la modifier, la supprimer</li>
        <li>pouvoir ajouter un crédit, le modifier, etc</li>
        <li>pouvoir ajouter un budget, le modifier, le supprimer. Un budget est un montant pour l'instant uniquement MENSUEL</li>
        <li>pouvoir ajouter une dépense dans un budget</li>
        <li>pouvoir ajouter une charge, la modifier, etc. Une charge est pour le moment récurrente ou non, uniquement MENSUEL. il faut donc une date de début, une date de fin, une date de prélèvement</li>
      </ul>
    </div>
  )
}