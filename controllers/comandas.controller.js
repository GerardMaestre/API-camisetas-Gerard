const comandasService = require('../services/comandas.service');

const crearComanda = (req, res) => {
    try {
        const nuevaComanda = comandasService.crearComanda(req.body);
        res.status(201).json(nuevaComanda); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listarComandas = (req, res) => {
    try {
        const comandas = comandasService.obtenerTodas();
        res.status(200).json(comandas);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const detalleComanda = (req, res) => {
    try {
        const comanda = comandasService.buscarPorId(req.params.id);
        if (!comanda) {
            return res.status(404).json({ error: "Comanda no encontrada" });
        }
        
        res.status(200).json(comanda);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    crearComanda,
    listarComandas,
    detalleComanda
};