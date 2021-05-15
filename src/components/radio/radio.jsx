import { React, useEffect, useState } from 'react';
import './radio.scss';

function Radio({
  name = 'DefaultName',
  value = 'DefaultValue',
  defaultCheck = false
}) {
  return (
    <label className="radio">
      {value}
      <input
        id={value}
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultCheck}
        className="radio__input"
        value={value}
      />
      <span className="radio__checkmark"></span>
    </label>
  );
}

export default Radio;