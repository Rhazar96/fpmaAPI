const quarto = require("../models/quarto.model");
const quarto = require("../models/reserva.model");
const sequelize = require("../config/db");

const controllers = {};
sequelize.sync();

//função do endpoint /alunos
controllers.quarto_list = async (req, res) => {
  //opção 1) retorna todos os alunos incluindo as disciplinas e respetiva relação
  const dados = await cliente.findAll({include: [reserva]}) 
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos quartos.",
      });
    });
    
    
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quarto_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await cliente.findAll({ where: { id_quarto: id }, include: [reserva] })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do quartos.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quarto_create = async (req, res) => {
  const { tipo, status, data } = req.body;
  const dados = await quarto.create({
    tipo: tipo,
    status: status,
    data: data,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o quarto.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.quarto_update = async (req, res) => {
  const { id } = req.params;
  const { tipo, status, data, } = req.body;
  const dados = await quarto.update(
    {
      tipo: tipo,
      status: status,
      data: data,
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
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do quarto.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quarto_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await cliente.destroy({ where: { id_quarto: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o quarto.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;