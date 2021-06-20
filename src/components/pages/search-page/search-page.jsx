import React, { useEffect, useState } from 'react';
import Button from '../../base/button';
import Input from '../../base/input';
import Select from '../../base/select';
import CardResult from '../../base/cardResult'
import '../presentation.scss'
import './search-page.scss';
import { search } from '../../../api/api';

function SearchPage() {
  const [results, setResults] = useState([]);
  const [plantName, setPlantName] = useState('');
  const [category, setCategory] = useState([]);
  const [selectedCat, setSelectedCat] = useState('');
  useEffect(() => {
    getCategories();
  }, []);

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
            onValueInput = {setPlantName}
          />
        </div>
        <div className="form-search__select">
          <Select 
            placeholder = {'Selecione uma categoria'}
            options = {category}
            onSelectedValue = {setSelectedCat}
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

  async function getCategories() {
    const pathParam = '/categories';
    const queryParams = '';
    await search(pathParam, queryParams, setCategory);
  }

  async function searchPlant() {
    const queryParams = {
      name: plantName,
      category: selectedCat.value
    };
    const pathParam = '/searchplants'
    await search(pathParam, queryParams, setResults);
  }
};



export default SearchPage;