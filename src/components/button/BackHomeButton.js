import './BackHomeButton.css'
import { Link } from 'react-router-dom';

const BackHomeButton = () => {
    return (
      <Link to="/" className="backHome">
        Voltar para Home
      </Link>
    );
  };


export default BackHomeButton;