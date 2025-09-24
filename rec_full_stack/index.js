const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//Armazenadas em Memória Local
let tarefas = [];
let idAtual = 1;

// Lista de Tarefas GET
app.get("/tarefas", (req, res) => {
    res.json(tarefas);
  });

  // Criar Nova Tarefa POST
  app.post("/tarefas", (req, res) => {
    const { titulo, descricao } = req.body;
  
    if (!titulo) {
      return res.status(400).json({ erro: "O titulo é obrigatório " });
    }
  
    const novaTarefa = {
      id: idAtual++,
      titulo,
      descricao: descricao || "",
      concluida: false,
    };
  
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
  });

  // Atualizar Tarefa PUT
  app.put("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, concluida } = req.body;
  
    const tarefa = tarefas.find((t) => t.id === parseInt(id));
  
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
  
    if (titulo !== undefined) tarefa.titulo = titulo;
    if (descricao !== undefined) tarefa.descricao = descricao;
    if (concluida !== undefined) tarefa.concluida = concluida;
  
    res.json(tarefa);
  });

  // Excluir Tarefa DELETE
  app.delete("/tarefas/:id", (req, res) => {
    const { id } = req.params;
  
    const index = tarefas.findIndex((t) => t.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
  
    const tarefaRemovida = tarefas.splice(index, 1);
    res.json(tarefaRemovida[0]);
  });


  //Rodar Servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

