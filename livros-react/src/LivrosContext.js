import React, { createContext, useState } from 'react';
import { Livro } from './modelo/Livro.ts';

const LivrosContext = createContext();

export const LivrosProvider = ({ children }) => {
  const [livros, setLivros] = useState([
    new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra']),
    new Livro(2, 4, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel']),
    new Livro(3, 3, 'Core Java for the Impatient', 'Readers familiar with Horstmann\'s original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries', ['Cay Horstmann'])
  ]);

  const incluir = (livro) => {
    const novoCodigo = livros.length ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    setLivros([...livros, livro]);
  };

  const excluir = (codigo) => {
    setLivros(livros.filter(l => l.codigo !== codigo));
  };

  return (
    <LivrosContext.Provider value={{ livros, incluir, excluir }}>
      {children}
    </LivrosContext.Provider>
  );
};

export default LivrosContext;
