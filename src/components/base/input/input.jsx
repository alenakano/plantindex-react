import React from 'react';
import './input.scss';

function Input({
  placeholder = 'Texto aqui',
  name = 'nameInput',
  onValueInput = () => false,
  subjectInput = { next: () => null },
  maxLength ='40' 
}) {
  return (
    <div className="input-search">
      <object aria-label="icon" type="image/svg+xml" className="input-search__icon"></object>
      <span className="input-search__icon"></span>
      <input 
        className="input-search__field"
        aria-label={placeholder}
        name={name} type="text" 
        placeholder={placeholder}
        maxLength = {maxLength}
        onInput={(e) => {
            e.preventDefault();
            onValueInput(e.target.value);
            subjectInput.next(e.target.value);
          }
        }
      />
    </div>
  );
}

export default Input;
