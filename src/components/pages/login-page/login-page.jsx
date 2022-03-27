import React, { useEffect } from 'react';
import './login-page.scss'
import '../presentation.scss'
import Input from '../../base/input';
import Button from '../../base/button';

function LoginPage() {
  return (
    <main className="main">
      <section>
      <div className="login-form">
          <form className="login-form__input" onSubmit={e => e.preventDefault()}>
            <Input 
              placeholder = "Digite o usuário"
              maxLength = {20}
              type="email"
            />
            <Input 
              placeholder = "Digite a senha"
              maxLength = {20}
              type="password"
            />
            <Button>
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;