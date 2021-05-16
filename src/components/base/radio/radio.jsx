import { React } from 'react';
import './radio.scss';

function Radio({
  name = 'name',
  options = [
    {
      value: 'value 01'
    },
    {
      value: 'value02'
    }
  ],
  onChangeValue = (e) => false
}) {
  return (
    <div 
      onChange= {(e) => {
          // e.preventDefault();
          const res = {
            value: e.target.value,
            id: e.target.id
          }
          onChangeValue(res);
        }
      }
    >
      {options.map((option, index) => {
        return (
          <label className="radio" key={index}>
            {option.value}
            <input
              id={option.value}
              value={index}
              type="radio"
              name={name}
              className="radio__input"
            />
            <span className="radio__checkmark"></span>
          </label>
        );
      })}
    </div>
  );
}

export default Radio;