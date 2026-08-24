# 📌 JS Basics — ponto de revisão

Scripts de prática dos **módulos nativos do Node.js**, em JavaScript puro (CommonJS). Mantidos aqui como checkpoint de revisão dos fundamentos, antes de avançar para tópicos como TypeScript, filas e Redis.

Cada arquivo é um script independente, feito para ser executado diretamente com `node`, não para ser importado por outro módulo.

## Arquivos

* **`fs.js`** — operações do módulo `fs`: criar pasta, criar/escrever arquivo, adicionar conteúdo e ler arquivo.

  ```bash
  node src/modules/js-basics/fs.js
  ```

* **`path.js`** — operações do módulo `path`: `basename`, `dirname`, `extname`, `parse` e `join`.

  ```bash
  node src/modules/js-basics/path.js
  ```

* **`http.js`** — servidor HTTP básico com o módulo nativo `http`, respondendo `/home` e `/users`.

  ```bash
  node src/modules/js-basics/http.js
  ```

* **`test/`** — pasta/arquivo gerados pelo `fs.js` ao rodar os exemplos.

## Por que ficaram e o que foi removido

Esses três continuam **válidos e funcionando** de forma isolada, sem dependências externas quebradas.

O antigo `express.js` (API com Express, Mongoose e EJS) foi **removido** por depender de `src/database/connect.js`, `src/models/user.model.js` e `src/views/index.ejs`, que já não existem no repositório — ele não rodava mais.
