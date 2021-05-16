import React from 'react';
import './cardSearch.scss';

function CardSearch({
  cards = [
    {
      imgPath: 'http://localhost:5000/morango.jpg',
      title: 'Teste Card',
      alt: 'image',
      desc: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent justo mauris, tristique at cursus viverra,
        elementum non lacus. Curabitur eu ex faucibus, vestibulum ex et,
        tincidunt nibh. In lobortis lectus nec mi vehicula, ut mollis risus
        ornare. Integer pellentesque sit amet`
    },
    {
      imgPath: 'http://localhost:5000/abobora.jpg',
      title: 'Teste Card',
      alt: 'image',
      desc: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent justo mauris, tristique at cursus viverra,
        elementum non lacus. Curabitur eu ex faucibus, vestibulum ex et,
        tincidunt nibh. In lobortis lectus nec mi vehicula, ut mollis risus
        ornare. Integer pellentesque sit amet`
    },
    {
      imgPath: 'http://localhost:5000/flores.jpg',
      title: 'Teste Card',
      alt: 'image',
      desc: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent justo mauris, tristique at cursus viverra,
        elementum non lacus. Curabitur eu ex faucibus, vestibulum ex et,
        tincidunt nibh. In lobortis lectus nec mi vehicula, ut mollis risus
        ornare. Integer pellentesque sit amet`
    }
  ]
}) {
  return ( 
    <section className="list-cards"> 
      { cards.map((card, index) => {
        return <div className="search-card" key={index}>
          <div className="search-card__image-container">
            <img 
              src={`${card.imgPath}`} 
              alt={card.alt ? card.alt : card.title + ' imagem'} 
              className="search-card__image">
            </img>
          </div>
          <h1 className="search-card__title title--signature">
            {card.title}
          </h1>
          <div className="search-card__text">
            {formatText(card.desc)}
          </div>
        </div>
        })
      }
    </section>  
  )

  function formatText(text) {
    return text.substr(0, 295) + '...';
  }
}

export default CardSearch;
