import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import LivrosContext from './LivrosContext';
import { ControleEditora } from './controle/ControleEditora.ts';
import { Livro } from './modelo/Livro.ts';

function LivroDados() {
  const { incluir } = useContext(LivrosContext);
  const controleEditora = useMemo(() => new ControleEditora(), []);
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(1);

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const tratarCombo = (event) => {
    const selectedValue = Number(event.target.value);
    setCodEditora(selectedValue);
  };

  const incluirLivro = (event) => {
    event.preventDefault();
    const livro = new Livro(
      0,
      Number(codEditora),
      titulo,
      resumo,
      autores.split('\n').filter(autor => autor.trim() !== '')
    );
    incluir(livro);
    navigate('/');
  };

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluirLivro}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input 
            type="text" 
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea 
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select 
            className="form-select"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
            required
          >
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
          <textarea 
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
}

export default LivroDados;
