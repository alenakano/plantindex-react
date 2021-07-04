import React, { useEffect, useState } from 'react';
import Input from '../../base/input';
import CardResult from '../../base/cardResult'
import '../presentation.scss'
import './search-page.scss';
import { search } from '../../../api/api';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

function SearchPage() {
  const [results, setResults] = useState([]);
  const subjectInput = new Subject();
  
  useEffect(() => {
    subscribeInput();
    return () => subjectInput.unsubscribe();
  });

  return (
    <main className="main">
      <section className="presentation">
        <div className="presentation__bg presentation__bg--search"></div>
        <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="presentation__icon2"></object>
        <div className="presentation__text title--signature">
          Busque uma planta
        </div>
      </section>
      <form className="form-search" onSubmit={e => e.preventDefault()}>
        <div className="form-search__input">
          <Input 
            placeholder = "Digite o nome da planta"
            maxLength = {20}
            subjectInput = {subjectInput}
          />
        </div>
      </form>
      <section className="search-results">
        <CardResult cards={results} />
      </section>
    </main>
  );

  function subscribeInput() {
    subjectInput
      .pipe(
        debounceTime(850),
      )
      .subscribe((value) => searchPlant(value));
  }

  async function searchPlant(value) {
    const queryParams = {
      name: value,
    };
    const pathParam = '/searchplants'
    await search(pathParam, queryParams, setResults);
  }
};



export default SearchPage;