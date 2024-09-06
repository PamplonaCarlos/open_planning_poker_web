import React, { useState } from 'react';
import './spinnerbutton.css';

const SpinningButton = ({ name ,onClick, setLoading, loading}) => {
  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoading(true);
    onClick(e)
  };

  return (
    <button className="spinning-button" onClick={handleClick} disabled={loading}>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        name
      )}
    </button>
  );
};

export default SpinningButton;