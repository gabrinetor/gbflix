import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={ function hendleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          console.log('Você tentou enviar o form');
      } }>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={   function funcaoHandlerQueOErroPediu(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}

          />
        </label>

        <button>
          Cadastrar
        </button>
        
      </form>

      <ul>
        {categorias.map( (categoria) => {
          return (
            <li key={categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;