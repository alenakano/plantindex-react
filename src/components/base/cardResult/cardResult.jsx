import React from 'react';
import './cardResult.scss';

function CardResult({
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
        return <div className="card-result" key={index}>
          <div className="card-result__image-container">
            <img 
              src={`http://localhost:5000/${card.title}.jpg`} 
              alt={card.alt ? card.alt : card.title + ' imagem'} 
              className="card-result__image">
            </img>
          </div>
          <h1 className="card-result__title">
            {card.title}
          </h1>
          <div className="card-result__text">
            {formatText(card.desc)}
          </div>
        </div>
        })
      }
    </section>  
  )

  function formatText(text) {
    return text.substr(0, 180) + '...';
  }
}

export default CardResult;
