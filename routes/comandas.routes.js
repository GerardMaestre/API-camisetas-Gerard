const express = require('express');
const router = express.Router();
const comandasController = require('../controllers/comandas.controller');

router.post('/', comandasController.crearComanda);
router.get('/', comandasController.listarComandas);
router.get('/:id', comandasController.detalleComanda);

module.exports = router;