# Projeto: API de Lista de Tarefas (To-do List)

## 1. Descrição do Projeto
Uma API REST desenvolvida em Node.js e Express, a mesma foi desenvolvida para gerenciar uma lista de tarefas(To-do list) com um armazenamento na memória
e possui um CRUD simples(GET, POST, PUT, DELETE).

---

## 2. Pré-requisitos
- Visual Code Instalado para abrir o projeto;
- Node.js instalado(abaixo intruções de como instalar);
- Express instalado(abaixo intruções de como instalar);
- Postman instalado para testar as rotas.

---

## 3. Instalação das Dependências
1. Baixe o repositório, extraia o arquivo em seguida abra a pasta no Visual Code.
2. Com visual code aberto vamos instalar as dependencia **node.js**, abra o CMD e digite o seguinte comando **"npm i node.js"**:
3. Com visual code aberto vamos instalar as dependencia **express**, abra o CMD e digite o seguinte comando **"npm i express"**:
4. Para inciar o servidor digite no CMD o seguinte comando **"node index.js"**;

---

## 4. Rotas disponíveis da API

| **Método** |**Rota**        |**O que faz**                                                  |
| ---------- | -------------- | ------------------------------------------------------------- |
| **GET**    | `/tarefas`     | Lista todas as tarefas cadastradas                            |
| **POST**   | `/tarefas`     | Cria uma nova tarefa                                          |
| **PUT**    | `/tarefas/:id` | Atualiza uma tarefa existente pelo seu ID                     |
| **DELETE** | `/tarefas/:id` | Exclui uma tarefa existente pelo seu ID                       |

---

#5. Exemplo de JSON que pode ser usado
Exemplo de JSON para criar uma nova tarefa (POST):
{
  "titulo": "Estudar para Prova",
  "descricao": "banco de dados e Estrutura de Dados"
}
---
Exemplo de JSON para atualizar uma tarefa (PUT):
{
  "titulo": "Compras do Mês",
  "descricao": "Feijão, Arroz e Batata",
  "concluida": true
}


