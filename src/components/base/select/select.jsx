import React, { useEffect } from 'react';
import './select.scss';
import { activateSelect } from './selectMoves';

function Select({
  options = ['TESTE 01', 'TESTE 02', 'TESTE 03'],
  onSelectedValue = () => false,
}) {
  useEffect(() => { activateSelect()})
  return (
    <>
    <div className="custom-select">
      <select className="custom-select__select" name="componente" id="componente" onChange={e => {console.log(e.target.value)}}>
        <option className="select__option" key="0" value="0">Selecione uma opção</option>
          {
            options.map((option, index) => {
              return <option className="select__option" key={index+1} value={index+1}>{option}</option> 
            })
          }
      </select>
    </div>
    <div id="selected" className="custom-select__selected"></div>
    <div 
      onClick={(e) => {
        e.preventDefault();
        const res = {
          option: e.target.innerHTML,
          value: e.target.getAttribute('value')
        };
        onSelectedValue(res)
      }
      } 
      id="select-options" 
      className="custom-select__options custom-select__options--hide">
      </div>
    </>
  );
}

export default Select;
