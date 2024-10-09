import { Button } from 'antd';
import { useNavigate } from 'react-router';
import './InscriptionButton.scss';

export interface InscriptionButtonProps {
}

export const InscriptionButton = (_: InscriptionButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="cta">
      <Button onClick={ () => navigate(`/profiles/creation`) } type="primary">S'inscrire</Button>
    </div>
  )
}