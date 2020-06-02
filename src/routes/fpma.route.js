const express = require('express');
const router = express.Router();

//importar o controlador
const clienteController = require('../controllers/cliente.controller');
const planoController = require('../controllers/plano.controller');
const quartoController = require('../controllers/quarto.controller');
/*const clienteController = require('../controllers/reserva.controller');*/
const utilizadorController = require('../controllers/utilizador.controller');


//endpoints da API
    //Cliente
router.get('/clientes', clienteController.cliente_list);
router.get('/cliente/:id', clienteController.cliente_detail);
router.post('/cliente', clienteController.cliente_create);
router.put('/cliente/:id', clienteController.cliente_update);
router.delete('/cliente/:id', clienteController.cliente_delete);

    //Plano
router.get('/planos', planoController.plano_list);
router.get('/plano/:id', planoController.plano_detail);
router.post('/plano', planoController.plano_create);
router.put('/plano/:id', planoController.plano_update);
router.delete('/plano/:id', planoController.plano_delete);


    //Quarto
router.get('/quartos', quartoController.quarto_list);
router.get('/quarto/:id', quartoController.quarto_detail);
router.post('/quarto', quartoController.quarto_create);
router.put('/quarto/:id', quartoController.quarto_update);
router.delete('/quarto/:id', quartoController.quarto_delete);

 /*   //Reserva
router.get('/reservas', reservaController.reserva_list);
router.get('/reserva/:id', reservaController.reserva_detail);
router.post('/reserva', reservaController.reserva_create);
router.put('/reserva/:id', reservaController.reserva_update);
router.delete('/reserva/:id', reservaController.reserva_delete);

 */   //Utilizador
router.get('/utilizadores', utilizadorController.utilizador_list);
router.get('/utilizador/:id', utilizadorController.utilizador_detail);
router.post('/utilizador', utilizadorController.utilizador_create);
router.put('/utilizador/:id', utilizadorController.utilizador_update);
router.delete('/utilizador/:id', utilizadorController.utilizador_delete);



module.exports = router;