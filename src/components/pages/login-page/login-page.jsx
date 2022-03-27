import React, { useEffect } from 'react';
import './login-page.scss'
import '../presentation.scss'
import Input from '../../base/input';

function LoginPage() {
  return (
    <main className="main">
      <section className="presentation">
        <div className="presentation__bg presentation__bg--sobre"></div>
        <object aria-label="vasos" alt="imagem-vasos" type="image/svg+xml" className="presentation__icon3"></object>
        <div className="presentation__text title--signature">
          Login
        </div>
      </section>
      <section className="login">
      <div className="form-search__input">
          <Input 
            placeholder = "Digite o nome da planta"
            maxLength = {20}
          />
        </div>
  
          <Input 
            placeholder = "Digite o nome da planta"
            maxLength = {20}
          />

      </section>
    </main>
  );
}

export default LoginPage;