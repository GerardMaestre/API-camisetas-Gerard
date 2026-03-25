const camisetasService = require('../services/camisetas.service');

const listarCamisetas = (req, res) => {
    const validSorts = ['precio_asc', 'precio_desc', 'nombre_asc', 'nombre_desc'];
    
    if (req.query.sort && !validSorts.includes(req.query.sort)) {
        return res.status(400).json({ error: "Parámetro sort no reconocido" });
    }

    try {
        const camisetas = camisetasService.obtenerTodas(req.query);
        res.status(200).json(camisetas);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const detalleCamiseta = (req, res) => {
    const { id } = req.params;

    try {
        const camiseta = camisetasService.buscarPorId(id);

        if (!camiseta) {
            return res.status(404).json({ error: "Camiseta no encontrada" });
        }

        res.status(200).json(camiseta);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    listarCamisetas,
    detalleCamiseta
};