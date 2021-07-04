import React from 'react';
import './info.scss'


function Info() {
  return (
    <section className="card-mp">
      <div className="card-mp title">Sobre as informações</div>
      <p className="card-mp__text">
        Todas as informações sobre as plantas foram coletadas do site <a className="card-mp__text--highlight" href="https://www.minhasplantas.com.br/" target="__blank">
        Minhas plantas</a> e são de autoria de <a href="https://carolcostajardineira.com.br/" className="card-mp__text--highlight" target="__blank">
        Carol Costa</a>, uma grande jornalista e pesquisadora sobre as melhores práticas de jardinagem e referência no assunto.<br />
        Esse site tem como objetivo o treinamento de diferentes tecnologias e técnicas para o desenvolvimento web. <br />
        Para conhecimento sobre plantas, recomendo o site, os cursos e o livro da Carol Costa.
      </p>
    </section>
  )
}

export default Info;