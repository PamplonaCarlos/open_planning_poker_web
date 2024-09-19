import React, { useState } from 'react';
import './spinnerbutton.css';

const SpinningButton = ({ name ,onClick, setLoading, loading, id}) => {
  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLoading(id);
    onClick(e)
  };

  return (
    <button className="spinning-button" onClick={handleClick} disabled={loading === id}>
      {loading === id ? (
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