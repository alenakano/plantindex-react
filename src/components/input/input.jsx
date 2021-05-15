import React from 'react';
import './input.scss';

function Input({
  placeholder = 'Texto aqui',
  name = 'nameInput',
  onValueInput = () => false,
  maxLength ='40' 
}) {
  return (
    <div className="input-search">
      <object type="image/svg+xml" className="input-search__icon"></object>
      <span className="input-search__icon"></span>
      <input 
        className="input-search__field" 
        name={name} type="text" 
        placeholder={placeholder}
        maxLength = {maxLength}
        onKeyUp={(e) => {
            e.preventDefault();
            onValueInput(e.target.value);
          }
        }
      />
    </div>
  );
}

export default Input;
