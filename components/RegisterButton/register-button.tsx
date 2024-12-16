import React from 'react';
import './register-button.css';

const RegisterButton = ({ name, onClick, setLoading, loading }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoading(true);
    onClick(e);
  };

  return (
    <button className="register-button" onClick={handleClick} disabled={loading}>
      {loading ? 'Loading...' : name}
    </button>
  );
};

export default RegisterButton;