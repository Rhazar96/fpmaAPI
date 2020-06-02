const cliente = require("../models/cliente.model");
const sequelize = require("../config/db");

const controllers = {};
sequelize.sync();

//função do endpoint /alunos
controllers.cliente_list = async (req, res) => {
  //opção 1) retorna todos os alunos incluindo as disciplinas e respetiva relação
  const dados = await cliente.findAll() 
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos alunos.",
      });
    });
    
    
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.cliente_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await cliente.findAll({ where: { id_cliente: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.cliente_create = async (req, res) => {
  const { nome, email, data, telemovel } = req.body;
  const dados = await cliente.create({
    nome: nome,
    email: email,
    data: data,
    telemovel: telemovel,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o aluno.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.cliente_update = async (req, res) => {
  const { id } = req.params;
  const { nome, email, data, telemovel } = req.body;
  const dados = await cliente.update(
    {
      nome: nome,
      email: email,
      data: data,
      telemovel: telemovel,
    },
    {
      where: { id_cliente: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.cliente_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await cliente.destroy({ where: { id_cliente: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o aluno.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;