# Aplicativo Catálogo de Livros em React

Este é um aplicativo em React para gerenciar um catálogo de livros.

## Pré-requisitos

- Node.js (https://nodejs.org/)
- npm (incluso no Node.js)

## Executando o Projeto Localmente

1. Abra seu terminal e navegue até o diretório do projeto:

```bash
cd livros-react
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Abra seu navegador e acesse:

```
http://localhost:3000
```

Você deverá ver o aplicativo Catálogo de Livros em execução.

## Recursos

- Visualizar uma lista de livros
- Adicionar novos livros
- Excluir livros existentes

## Observações

- Este projeto utiliza a API de Contexto do React para gerenciamento de estado.
- Bootstrap 5 é usado para estilização.

## Solução de problemas

- Se você encontrar problemas com dependências ausentes, tente excluir `node_modules` e executar `npm install` novamente.
- Certifique-se de que sua versão do Node.js esteja atualizada.

## Licença

Este projeto é de código aberto e gratuito.

## Sobre o LivrosContext.js

Caro professor, o novo livro não estava sendo exibido na lista seguindo os passos da atividade. O problema é que a classe ControleLivros armazena os livros em um array local, mas os componentes React não são renderizados novamente quando esse array é alterado, pois está fora do gerenciamento de estado do React.

Para corrigir isso, precisei gerenciar a lista de livros no estado do React e passar as funções de estado e atualização corretamente.
