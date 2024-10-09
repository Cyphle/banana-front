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
        <h2>Pour suivre facilement vos comptes</h2>

        <p>Créer des comptes et ajouter vos dépenses en fonction de leurs natures</p>

        <RegistrationButton />
      </section>

      <section>
        <h2>Des comptes personnels, commun et épargne</h2>

        <p>Différenciez vos comptes personnels, commun et épargne. Partagez ceux que vous voulez avec vos contacts</p>

        <RegistrationButton />
      </section>
    </div>
  )
}