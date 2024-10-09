import './Home.scss';
import { RegistrationButton } from '../../components/registration-button/RegistrationButton.tsx';

export const Home = () => {
  return (
    <div className="homepage">
      <div className="main-title">
        <h1>Banana</h1>
        <p>Un gestionnaire de compte bancaire facile et familial</p>
      </div>

      <section>
        <h2>Pour suivre facilement tes comptes</h2>

        <p>Crée des comptes et ajoute tes dépenses en fonction de leurs natures</p>

        <RegistrationButton />
      </section>

      <section>
        <h2>Des comptes personnels, commun et épargne</h2>

        <p>Différencie tes comptes personnels, commun et épargne. Partage ceux que tu veux avec tes contacts</p>

        <RegistrationButton />
      </section>
    </div>
  )
}