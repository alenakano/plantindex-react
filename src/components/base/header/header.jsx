import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header menu">
      <nav className="menu__block">
        <p className="title--signature clickable">Plant<span className="title">Index</span></p>
        <ul className="menu__list">
          <li className="menu__object">
            <object aria-label="icone-folha" alt="icone-folha" type="image/svg+xml" className="menu__object--icon1"></object>
            <p className="menu__text clickable">sobre</p>
          </li>
          <li className="menu__object clickable">
            <object aria-label="icone-folha" alt="icone-folha" type="image/svg+xml" className="menu__object--icon2"></object>
            <p className="menu__text">cadastre</p>
          </li>
          <li className="menu__object">
            <object aria-label="icone-folha" alt="icone-folha"  type="image/svg+xml" className="menu__object--icon3"></object>
            <p className="menu__text clickable">pesquise</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;