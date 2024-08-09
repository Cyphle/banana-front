import { Button } from '@/components/ui/button.tsx';
import './Home.scss';

export const Home = () => {
  return (
    <div className="homepage">
      <div className="main-title">
        <h1>Banana</h1>
        <p>Un gestionnaire de compte bancaire facile et familial</p>
      </div>

      <div>
        <div className="test">
          <Button className='p-4 hover:bg-[#4553d1] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'>S'inscrire</Button>
        </div>
      </div>
    </div>
  )
}