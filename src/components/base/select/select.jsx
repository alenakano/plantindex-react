import React, { useEffect } from 'react';
import './select.scss';
import { activateSelect } from './selectMoves';

function Select({
  options = [
    {id: 1, nome: 'TESTE 01'}, {id: 2, nome: 'TESTE 02'}, {id: 3, nome: 'TESTE 03'}],
  onSelectedValue = () => false,
  placeholder = 'Selecione uma opção'
}) {
  useEffect(() => { 
    activateSelect(); 
    return () => activateSelect();
  });
  return (
    <>
    <div className="custom-select">
      <select className="custom-select__select" name="componente" id="componente" onChange={e => {console.log(e.target.value)}}>
        <option className="select__option" key="0" value="0">{placeholder}</option>
          {
            options.map((option) => {
              return <option className="select__option" id={option.id} key={option.id} value={option.nome}>{option.nome}</option> 
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
        onSelectedValue(res.value);
      }
      } 
      id="select-options" 
      className="custom-select__options custom-select__options--hide">
      </div>
    </>
  );
}

export default Select;
