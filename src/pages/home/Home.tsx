import './Home.scss';
import { Button } from 'antd';

export const Home = () => {
  return (
    <div className="homepage">
      <div className="main-title">
        <h1>Banana</h1>
        <p>Un gestionnaire de compte bancaire facile et familial</p>
      </div>

      <div>
        <div className="test">
          <Button type="primary">S'inscrire</Button>
        </div>
      </div>
    </div>
  )
}