import React from 'react';
import './button.scss';

function Button({
  transparent,
  text = 'OK',
  onButtonClicked = () => false 
}) {
  return (
    <div>
      <input 
        className={
          transparent 
          ? "button button--transparent" 
          : "button button--solid"
        } 
        type="button" 
        value={text} 
        onClick={(event) => {
          event.preventDefault();
          onButtonClicked();
        }} 
      />
    </div>
  );
}

export default Button;
