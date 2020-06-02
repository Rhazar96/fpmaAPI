const plano = require("../models/plano.model");
const sequelize = require("../config/db");

const controllers = {};
sequelize.sync();

//função do endpoint /alunos
controllers.plano_list = async (req, res) => {
  //opção 1) retorna todos os alunos incluindo as disciplinas e respetiva relação
  const dados = await plano.findAll() 
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos planos.",
      });
    });
    
    
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.plano_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await plano.findAll({ where: { id_plano: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos planos.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.plano_create = async (req, res) => {
  const { tipo_plano, data, preco_plano } = req.body;
  const dados = await plano.create({
    tipo_plano: tipo_plano,
    data: data,
    preco_plano: preco_plano,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o plano.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.plano_update = async (req, res) => {
  const { id } = req.params;
  const { tipo_plano, data, preco_plano } = req.body;
  const dados = await plano.update(
    {
      tipo_plano: tipo_plano,
      data: data,
      preco_plano: preco_plano,
    },
    {
      where: { id_plano: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualizar o plano.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.plano_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await plano.destroy({ where: { id_plano: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o plano.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;