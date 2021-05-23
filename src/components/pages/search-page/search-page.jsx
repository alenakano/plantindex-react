import React, { useState } from 'react';
import Button from '../../base/button';
import Input from '../../base/input';
import Select from '../../base/select';
import CardResult from '../../base/cardResult'
import '../presentation.scss'
import './search-page.scss';
import { search } from '../../../api/api';

function SearchPage() {
  const [results, setResults] = useState([]);
  return (
    <main className="main">
      <section className="presentation">
        <div className="presentation__bg presentation__bg--search"></div>
        <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="presentation__icon2"></object>
        <div className="presentation__text title--signature">
          Busque uma planta
        </div>
      </section>
      <form className="form-search">
        <div className="form-search__input">
          <Input 
            placeholder = "Digite o nome da planta"
            maxLength = {20}
          />
        </div>
        <div className="form-search__select">
          <Select 
            placeholder = {'Selecione uma categoria'}
          />
        </div>
        <div className="form-search__button">
          <Button transparent={true} text='Buscar' onButtonClicked={searchPlant} />
        </div>
      </form>
      <section className="search-results">
        <CardResult cards={results} />
      </section>
    </main>
  );
  async function searchPlant() {
    await search('/data', setResults);
  }
};



export default SearchPage;