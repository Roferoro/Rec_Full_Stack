# Projeto: API REST de Lista de Tarefas

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

## 5. Exemplo de JSON que pode ser usado  
**Exemplo de JSON para criar uma nova tarefa (POST):**   
{  
  "titulo": "Estudar para Prova",  
  "descricao": "banco de dados e Estrutura de Dados"  
}  

**Exemplo de JSON para atualizar uma tarefa (PUT):**  
{  
 "titulo": "Compras do Mês",  
 "descricao": "Feijão, Arroz e Batata",   
 "concluida": true  
}  

---
## 6. Tutorial de como testar no Postman
1. Faça o dowload do Postman <a href="https://www.postman.com/downloads/">Site Postman</a>;
2. Após ter instalado abra a aplicação e faça o login com uma conta Google ou crie um novo cadastro.
3. Depois de logar você vai iniciar na homepage, no canto superior esquerdo vai haver um botão de **"+"** você deve apertalo.
4. Logo em seguida você sera redirecionado para o workplace, você deve clicar no body e selecionar a opção **ROW** na caixa de seleção e selecionar **JSON**.
5. Após ter feito as instruções acima, você vai se deparar com uma caixa de seleção escrito GET onde tentro tem as outras opções de rota (POST, PUT e DELETE), do lado tem uma caixa de texto onde você deve colocar a URL para GET e POST **"http://localhost:3000/tarefas"**. e para PUT e DELETE http://localhost:3000/N (Altere o **"N"** pelo numero de id).
6. Para utilizar as rotas POST, PUT e DELETE utilize os exemplos em JSON no topico 5. 
7. E Pronto a API está configurada para uso.

