import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
// import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="gbflix logo" />
          </a>

          <Button as="a" className="ButtonLink" href="/">
            Prop especifica chama
          </Button>
        </nav>
    );
}

export default Menu;