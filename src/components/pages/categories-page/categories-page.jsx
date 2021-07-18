import React, { useEffect, useState } from 'react';
import CardResult from '../../base/cardResult'
import Select from '../../base/select'

import '../presentation.scss'
import { search } from '../../../api/api';
import './categories-page.scss';

export function CategoriesPage() {
  const [category, setCategory] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="form-search__select">
          <Select 
            placeholder = {'Selecione uma categoria'}
            options = {category}
            onSelectedValue = {searchPlant}
          />
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

  async function searchPlant(value) {
    const queryParams = {
      category: value
    };
    const pathParam = '/searchplants'
    await search(pathParam, queryParams, setResults);
  }
}

export default CategoriesPage;