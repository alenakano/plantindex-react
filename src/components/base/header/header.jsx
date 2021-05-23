import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header({
}) {
  return (
    <header className="header menu">
      <nav className="menu__block">
        <div 
          onClick = {
            (e) => {
              e.preventDefault();
            }
          }>
          <Link to='/'>
            <p className="title--signature clickable">Plant<span className="title">Index</span></p>
          </Link>
        </div>
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
            <Link className="menu__text clickable"  to='/search'>
                pesquise
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;