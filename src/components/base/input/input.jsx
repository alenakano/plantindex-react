import React from 'react';
import './input.scss';

function Input({
  placeholder = 'Texto aqui',
  name = 'nameInput',
  onValueInput = () => false,
  subjectInput = { next: () => null },
  showIcon = false,
  maxLength ='40' 
}) {
  return (
    <div className="input-search">
      { showIcon && <object aria-label="icon" type="image/svg+xml" className="input-search__icon"></object> }
      { showIcon && <span className="input-search__icon"></span> }
      <input 
        className={showFindIcon(showIcon)}
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

function showFindIcon(showIcon) {
  return showIcon ? 'input-search__field-icon' : 'input-search__field';
}

export default Input;
