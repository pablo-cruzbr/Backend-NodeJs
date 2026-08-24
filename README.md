# 📘 Curso de Node.js — Do Básico ao Avançado

Este repositório é meu espaço de prática de **Node.js**, do básico ao avançado. Cada tópico é estudado e versionado com **commits atômicos**, documentando a evolução do aprendizado passo a passo.

---

## 🎯 Objetivo do repositório

* Praticar conceitos de Node.js progressivamente, dos módulos nativos até tópicos avançados
* Registrar cada técnica aprendida em commits pequenos e atômicos (`feat`, `fix`, `style`, `refactor`, `test`)
* Servir como referência pessoal de estudo

---

## 🚀 O que é Node.js?

O **Node.js** é um ambiente de execução JavaScript no lado do servidor, construído sobre o motor **V8 do Google Chrome**.

### 🧠 Como ele funciona?

* Executa JavaScript fora do navegador
* Utiliza um modelo **assíncrono e orientado a eventos**
* Baseado em **single-thread**, mas altamente escalável

### 🎯 Para que ele serve?

* Criação de **backends**
* Desenvolvimento de **APIs REST**
* Envio de **JSON** para aplicações front-end
* Integração com bancos de dados

---

## 📁 Estrutura do projeto

```
src/
  modules/
    js-basics/           # ponto de revisão: fs, path e http em JS puro (ver README da pasta)
      fs.js
      path.js
      http.js
      test/
    app.ts              # criação do app Express em TypeScript (separado do listen, p/ testes)
    server.ts            # inicialização do servidor TypeScript (app.listen)
    route.ts             # rotas Express em TypeScript
    route.test.ts         # teste automatizado da rota com Vitest + Supertest
index.js               # ponto de entrada do projeto
person.js
```

---

## 📦 Módulos no Node.js

### Tipos de módulos:

* **Módulos próprios**: podemos criar nossos próprios arquivos e importá-los
* **Módulos nativos**: o Node.js já vem com vários módulos pré-instalados

  * Exemplos: `path`, `fs`, `http`

### Importação de módulos

* Utilizamos o **CommonJS**:

```js
const fs = require('fs');
```

---

## 📦 NPM — Node Package Manager

O **NPM** é o gerenciador de pacotes do Node.js.

### Funções do NPM:

* Instalar módulos de terceiros
* Gerenciar dependências do projeto

### Estrutura importante:

* `node_modules/` → pasta onde ficam os módulos instalados
* `package.json` → lista todas as dependências do projeto
* `package-lock.json` → registra as versões exatas dos módulos

### Comandos básicos:

```bash
npm init               # Cria o package.json
npm install express    # Instala um pacote localmente
npm install -g nodemon # Instala um pacote globalmente
```

---

## 📁 Módulos nativos — ponto de revisão (`js-basics`)

`fs`, `path` e `http` puros, em `src/modules/js-basics/` — ver o [README dessa pasta](src/modules/js-basics/README.md) para detalhes e como rodar cada script.

```bash
node src/modules/js-basics/fs.js
node src/modules/js-basics/path.js
node src/modules/js-basics/http.js
```

---

## 📄 HTML e JSON

* Criação de respostas em **HTML**
* Retorno de **JSON** para consumo por aplicações front-end

> O Node.js é amplamente utilizado para criar **APIs** que enviam JSON para o front-end.

---

## 🔌 Middlewares

### O que são Middlewares?

> Funções que são executadas **antes** da requisição chegar à rota final.

* Muito utilizados em frameworks como **Express**
* Permitem validações, autenticação, logs, etc.

---

## 🔷 TypeScript

Prática de Node.js tipado com Express, em `src/modules/`.

* `app.ts` cria e configura o app Express (sem subir o servidor), o que permite importá-lo diretamente nos testes
* `server.ts` importa o `app` e faz o `listen` na porta
* `route.ts` define as rotas com tipagem do Express (`Request`, `Response`)

### Rodando o servidor TypeScript:

```bash
npm run start:ts
```

---

## 🧪 Testes automatizados

Testes unitários/integração com **Vitest** e **Supertest**, cobrindo as rotas Express em TypeScript.

📄 **Exemplo:** `src/modules/route.test.ts`

```ts
import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from './app';

describe('GET /home', () => {
    it('returns a hello world message', async () => {
        const response = await request(app).get('/home');
        expect(response.status).toBe(200);
    });
});
```

### Rodando os testes:

```bash
npm test
```

---

## 🗺️ Próximos passos (roadmap)

Tópicos que pretendo estudar e adicionar a este repositório:

* ✅ Testes unitários/integração (Vitest + Supertest)
* ⬜ Filas de processamento assíncrono com **BullMQ**
* ⬜ **Redis** como cache e broker de filas
* ⬜ Workers dedicados para processamento em background

---

## 🧠 Conclusão

Este repositório reúne minha prática contínua de **Node.js**, indo de conceitos básicos a tópicos avançados:

* Módulos nativos e criação de servidores
* APIs REST com Express e JSON
* Middlewares
* Node.js com TypeScript
* Testes automatizados
* (Em progresso) Filas com BullMQ e Redis

📌 Todos os aprendizados são versionados com **commits atômicos**, reforçando boas práticas de Git e organização de código.

---

🚀 **Seguimos evoluindo!**
