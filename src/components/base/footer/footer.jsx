import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="footer__text">
          PlantIndex é um projeto experimental
        </div>
        <div className="footer__group">
          <a 
            href="https://www.linkedin.com/in/alexandre-nakano-marques/" 
            target="__blank"
            className="footer__group--linkedin"
            aria-label="Linkedin"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/alenakano/" 
            target="__blank"
            className="footer__group--github"
            aria-label="Github"
          >
            Github
          </a>
          <a
            href="mailto: ale.nakano.ale@gmail.com" 
            target="__blank"
            className="footer__group--email"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;