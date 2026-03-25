const express = require('express');
const router = express.Router();
const camisetasController = require('../controllers/camisetas.controller');

router.get('/', camisetasController.listarCamisetas);
router.get('/:id', camisetasController.detalleCamiseta);

module.exports = router;