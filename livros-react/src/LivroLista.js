import React, { useContext, useMemo } from 'react';
import LivrosContext from './LivrosContext';
import { ControleEditora } from './controle/ControleEditora.ts';

function LivroLista() {
  const { livros, excluir } = useContext(LivrosContext);
  const controleEditora = useMemo(() => new ControleEditora(), []);

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <tr key={livro.codigo}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
              <td>
                <ul>
                  {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => excluir(livro.codigo)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
