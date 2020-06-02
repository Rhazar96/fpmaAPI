const reserva = require("../models/reserva.model");
const cliente = require('../models/cliente.model');
const plano = require('../models/plano.model');
const quarto = require('../models/quarto.model');
const sequelize = require("../config/db");

const controllers = {};
sequelize.sync();

//função do endpoint /reserva
controllers.reserva_list = async (req, res) => {
  //opção 1) retorna todos os reserva incluindo as disciplinas e respetiva relação
  const dados = await reserva.findAll({include: [cliente, plano, quarto]}) 
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos reserva.",
      });
    });
    
    
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.reserva_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await reserva.findAll({ where: { id_reserva: id }, include: [cliente, plano, quarto] })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da reserva.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.reserva_create = async (req, res) => {
  const { id_quarto, id_plano, id_cliente, data_checkin, data_checkout, observacoes, data_alteracao } = req.body;
  const dados = await reserva.create({
    id_quarto: id_quarto,
    id_plano: id_plano,
    id_cliente: id_cliente,
    data_checkin: data_checkin,
    data_checkout: data_checkout,
    observacoes: observacoes,
    data_alteracao: data_alteracao,
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

controllers.reserva_update = async (req, res) => {
  const { id } = req.params;
  const { id_quarto, id_plano, id_cliente, data_checkin, data_checkout, observacoes, data_alteracao  } = req.body;
  const dados = await reserva.update(
    {
      id_quarto: id_quarto,
      id_plano: id_plano,
      id_cliente: id_cliente,
      data_checkin: data_checkin,
      data_checkout: data_checkout,
      observacoes: observacoes,
      data_alteracao: data_alteracao,
    },
    {
      where: { id_reserva: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados da reserva.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.reserva_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await reserva.destroy({ where: { id_reserva: id } }).catch((error) => {
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