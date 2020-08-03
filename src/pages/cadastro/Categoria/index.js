import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição inicial',
    cor: '#000',
  }
  //const [nomeDaCategoria, setNomeDaCategoria] = useState(valoresIniciais);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {

    // chave: nome, descriçao, ....
    setValues({
      ...values,
      [chave]: valor,  //pega os valores da chave e define o valor pra ela [essa chave é um valor dinamico] //chave: nome | nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    // setNomeDaCategoria(infosDoEvento.target.value);
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    ); 
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={ function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values  //nomeDaCategoria
          ]);
      }}>

        <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={values.nome} //value={nomeDaCategoria} //value={values['nome']} 
            name="nome"
            onChange={ handleChange }
          />
        </label>
        </div>

        <div>
        <label>
          Descrição: 
          <textarea
            type="text"
            value={values.descricao} //value={nomeDaCategoria}
            name="descricao"
            onChange={ handleChange }
          />
        </label>

        <label>
          Cor: 
          <input
            type="color"
            value={values.cor}  //value={nomeDaCategoria}
            name="cor"
            onChange={ handleChange }
          />
        </label>
        </div>

        <button>
          Cadastrar
        </button>
        
      </form>

      <ul>
        {categorias.map( (categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
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