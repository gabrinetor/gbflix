import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={   function funcaoHandlerQueOErroPediu(infosDoEvento) {
              console.log('[nomeDaCategoria] ', nomeDaCategoria);
              console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
              setNomeDaCategoria(infosDoEvento.target.value);
            }}

          />
        </label>

        <button>
          Cadastrar
        </button>
        
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;