import React, { useEffect } from 'react';
import './about-page.scss'
import '../presentation.scss'
import Info from '../../base/info';

function AboutPage() {
  useEffect(() => {
    if(!window.location.hash){
      window.scrollTo(0, 0);
    }
  });
  return (
    <main className="main">
      <section className="presentation">
        <div className="presentation__bg presentation__bg--sobre"></div>
        <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="presentation__icon3"></object>
        <div className="presentation__text title--signature">
          Sobre esse projeto
        </div>
      </section>
      <Info />
      <section className="about-dev">
        <div className="about-dev__bg"></div>
        <div className="separator">
          <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="separator__icon"></object>
        </div>
        <div className="about-dev__title title">
          Sobre o autor do site
        </div>
        <div className="card-dev">
          <div className="card-dev__photo" />
          <div className="card-dev__text">
            Alexandre Nakano Marques
          </div>
        </div>
      </section>
      <div className="card-contact" id= "contact">
        <h1>TESTE CONTATO</h1>
      </div>

    </main>
  );
}

export default AboutPage;