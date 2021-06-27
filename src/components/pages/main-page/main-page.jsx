import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../../base/info';
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
      <Info />
      <section className="board">
        <div className="board__title title">
          Para aqueles que gostam de plantas
        </div>
        <div className="board__main clickable">
          <Link to="/search">
            <div className="board__main--mask">
                <p>Procure por uma planta</p>
            </div>
          </Link>
        </div>
        <div className="board__aux1 clickable">
          <Link to="/sobre">
            <div className="board__aux1--mask">
              <p>Sobre o site</p>
            </div>
          </Link>
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