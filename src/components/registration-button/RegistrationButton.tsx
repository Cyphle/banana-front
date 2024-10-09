import { Button } from 'antd';
import { useNavigate } from 'react-router';
import './RegistrationButton.scss';

export interface InscriptionButtonProps {
}

export const RegistrationButton = (_: InscriptionButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="cta">
      <Button onClick={ () => navigate(`/registration`) } type="primary">S'inscrire</Button>
    </div>
  )
}