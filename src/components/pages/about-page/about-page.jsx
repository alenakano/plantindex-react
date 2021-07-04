import React from 'react';
import './about-page.scss'
import '../presentation.scss'
import Info from '../../base/info';

function AboutPage() {
  return (
    <main className="main">
      <section class="presentation">
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

    </main>
  );
}

export default AboutPage;