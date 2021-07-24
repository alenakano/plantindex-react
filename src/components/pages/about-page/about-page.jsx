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
        <div className="card-dev">
          <div className="separator">
            <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="separator__icon"></object>
          </div>
          <div className="about-dev__title title">
            Sobre o autor do site
          </div>
          <div className="card-dev__container">
            <div className="card-dev__photo" />
            <div className="card-dev__text">
                <span className="card-dev__text--center">
                  Olá! Muito obrigado pela sua visita!<br/>
                </span>
                Meu nome é Alexandre Nakano Marques e sou um desenvolvedor com 
                experiência em diversas tecnologias. Comecei como desenvolvedor 
                front-end <span className="card-dev__text--highlight">Angular</span>, 
                minha especialidade, e fui adquirindo experiência em outras 
                tecnologias, como <span className="card-dev__text--highlight">
                NodeJS</span>, <span className="card-dev__text--highlight">Java</span> 
                (Spring, Struts, JAX-RS) e <span className="card-dev__text--highlight">
                ReactJS</span>. Todas elas utilizando bibliotecas e soluções comumente
                utilizadas no mercado.<br />
                Tudo isso pensando em arquitetura para cloud baseado em microsserviços,
                utilizando esteira de automação DevOps, controle de versão com GIT 
                (GitFlow), testes unitários e controle de qualidade. <br />
                São muitas experiências acumuladas ao longo de minha trajetória e
                posso contar mais! (:
                Utilize alguns dos meios do rodapé.
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;