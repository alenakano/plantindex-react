import React from 'react';
import './checkbox.scss';

function Checkbox({
  value = 'Default Value',
  onCheckBoxClicked = (ev) => false 
}) {
  return (
    <label 
      className="checkbox" 
      onClick={(ev) => {
          if(ev.target.checked !== undefined) {
            const response = {
              name: value,
              value: ev.target.checked
            }
            onCheckBoxClicked(response);
          }
        }
      }
    >
      {value}
      <input type="checkbox" name={value} className="checkbox__input" />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}

export default Checkbox;
