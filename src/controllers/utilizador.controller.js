const utilizador = require("../models/utilizador.model");
const sequelize = require("../config/db");

const controllers = {};
sequelize.sync();

//função do endpoint /utilizadores
controllers.utilizador_list = async (req, res) => {
  //opção 1) retorna todos os utilizadores incluindo as disciplinas e respetiva relação
  const dados = await utilizador.findAll() 
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos utilizadores.",
      });
    });
    
    
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await utilizador.findAll({ where: { id_utilizador: id }})
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do utilizador.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_create = async (req, res) => {
  const { username, password} = req.body;
  const dados = await utilizador.create({
    username: username,
    password: password,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o utilizador.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_update = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const dados = await utilizador.update(
    {
      username: username,
      password: password,
    },
    {
      where: { id_utilizador: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do utilizador.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await utilizador.destroy({ where: { id_utilizador: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o utilizador.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};


//Login ---> Obrigado Rafael Henriques <3 <3 <3 //
controllers.utilizador_login = async (req, res) => {
  const { username, password} = req.body;
  const credenciais = await utilizador.findOne({ where: {username:username} });
  if(!credenciais){
    return res.status(400).send({error:"Dados do utilizador não encontrados."});
  }
  if(password !== credenciais.password){
    return res.status(400).send({error: "Password errada."});
  }
  res.json({success:true, dados:credenciais})
};

module.exports = controllers;