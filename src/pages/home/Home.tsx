import './Home.scss';
import { Button } from 'antd';

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

        <div className="cta">
          <Button type="primary">S'inscrire</Button>
        </div>
      </section>

      <div>
        <div className="test">
          <Button type="primary">S'inscrire</Button>
        </div>
      </div>
    </div>
  )
}