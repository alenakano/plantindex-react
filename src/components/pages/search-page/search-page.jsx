import React from 'react';
import Button from '../../base/button';
import Input from '../../base/input';
import Select from '../../base/select';
import CardResult from '../../base/cardResult'
import '../presentation.scss'
import './search-page.scss';


function SearchPage() {
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
          <Button transparent={true} />
        </div>
      </form>
      <section className="search-results">
        <CardResult />
      </section>
    </main>
  );
}

export default SearchPage;