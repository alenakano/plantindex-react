import React from 'react';
import './cardSearch.scss';

function CardSearch({
  imgPath = 'http://localhost:5000/morango.jpg',
  title = 'Teste Card',
  alt = title + ' image',
  desc = `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Praesent justo mauris, tristique at cursus viverra,
    elementum non lacus. Curabitur eu ex faucibus, vestibulum ex et,
    tincidunt nibh. In lobortis lectus nec mi vehicula, ut mollis risus
    ornare. Integer pellentesque sit amet`
}) {
  return (
    <section class="list-cards">
      <div className="search-card">
        <div className="search-card__image-container">
          <img src={`${imgPath}`} alt={alt} className="search-card__image"></img>
        </div>
        <h1 className="search-card__title title--signature">{title}</h1>
        <div className="search-card__text">
          {formatText(desc)}
        </div>
      </div>
    </section>
  );

  function formatText(text) {
    return text.substr(0, 295) + '...';
  }
}

export default CardSearch;
