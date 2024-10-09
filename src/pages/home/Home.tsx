import './Home.scss';
import { InscriptionButton } from '../../components/inscription-button/InscriptionButton.tsx';
import { Footer } from '../../shared/footer/Footer.tsx';

// TODO to be tested
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

        <InscriptionButton />
      </section>

      <section>
        <h2>Des comptes personnels, commun et épargne</h2>

        <p>Différenciez vos comptes personnels, commun et épargne. Partagez ceux que vous voulez avec vos contacts</p>

        <InscriptionButton />
      </section>

      <Footer />
    </div>
  )
}