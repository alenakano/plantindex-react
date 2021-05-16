import React from 'react';
import './board.scss'
import '../presentation.scss'

function MainPage() {
  return (
    <main className="main">
      <section className="presentation">
        <div className="presentation__bg"></div>
        <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="presentation__icon"></object>
        <div className="presentation__text title--signature">
          Descubra mais das plantas
        </div>
      </section>
      <section className="board">
        <div className="board__title title">
          Encontre plantas por categoria
        </div>
        <div className="board__main clickable">
          <div className="board__main--mask">
            <p>teste01</p>
          </div>
        </div>
        <div className="board__aux1 clickable">
          <div className="board__aux1--mask">
            <p>teste02</p>
          </div>
        </div>
        <div className="board__aux2 clickable">
          <div className="board__aux2--mask">
            <p>teste03</p>
          </div>
        </div>
        <div className="board__aux3 clickable">
          <div className="board__aux3--mask">
            <p>teste04</p>
          </div>
        </div>
      </section>
      <section className="explanation">
      </section>
    </main>
  );
}

export default MainPage;