import React from 'react';
import './not-found.scss'

function NotFound() {
  return (
    <main className="main">
      <div className='boardNF'>
        <div className='boardNF--mask'>
          <div className='boardNF__text'>
            <h1 className='boardNF__text--title'>):</h1>
            <p className='boardNF__text--subtitle'>A página que você procura não foi encontrada.</p>
          </div>
        </div>
        <img alt="not found" className='boardNF__image' src='/not-found2.jpg' />
      </div>
    </main>
  )
}

export default NotFound;