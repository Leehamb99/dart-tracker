import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <button onClick={handleClick}>
      Back
    </button>
  );
}

export default BackButton 
