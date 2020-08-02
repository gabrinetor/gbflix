import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        {/* <img src="../../assets/img/Logo.png" alt="Logo Gbflix" />  */}
      </a>
      <p>
        Desenvolvido durante a semana de 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;