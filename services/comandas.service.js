const comandasData = require('../data/comandas');
const camisetasService = require('./camisetas.service');

const esEmailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validarPedido = (datos) => {
    if (!datos.cliente || !datos.cliente.nombre || datos.cliente.nombre.length < 2) {
        return "El nombre del cliente es obligatorio y debe tener al menos 2 caracteres";
    }
    if (!datos.cliente.email || !esEmailValido(datos.cliente.email)) {
        return "El formato del email no es valido";
    }
    if (!datos.items || !Array.isArray(datos.items) || datos.items.length === 0) {
        return "El pedido debe contener al menos una camiseta";
    }

    for (let i = 0; i < datos.items.length; i++) {
        const item = datos.items[i];
        
        if (!item.cantidad || item.cantidad < 1) {
            return `La cantidad del item ${i + 1} debe ser mayor o igual a 1`;
        }

        const camiseta = camisetasService.buscarPorId(item.camisetaId);
        if (!camiseta) {
            return `La camiseta con ID ${item.camisetaId} no existe en el catálogo.`;
        }
        if (!camiseta.tallas.includes(item.talla)) {
            return `La talla ${item.talla} no esta disponible para la camiseta ${item.camisetaId}.`;
        }
        if (!camiseta.colores.some(c => c.toLowerCase() === item.color.toLowerCase())) {
            return `El color ${item.color} no está disponible para la camiseta ${item.camisetaId}.`;
        }
    }
    return null; 
};

class ComandasService {
    crearComanda(datosComanda) {
        const errorValidacion = validarPedido(datosComanda);
        if (errorValidacion) {
            throw new Error(errorValidacion); 
        }

        let totalPedido = 0;
        const itemsProcesados = datosComanda.items.map(item => {
            const camiseta = camisetasService.buscarPorId(item.camisetaId);
            const subtotal = camiseta.precioBase * item.cantidad;
            totalPedido += subtotal;

            return {
                camisetaId: item.camisetaId,
                nombre: camiseta.nombre,
                talla: item.talla,
                color: item.color,
                cantidad: item.cantidad,
                precioUnitario: camiseta.precioBase,
                subtotal: subtotal
            };
        });

        const nuevaComanda = {
            id: `ORD-${String(comandasData.length + 1).padStart(4, '0')}`,
            fecha: new Date().toISOString(),
            estado: "recibida",
            cliente: datosComanda.cliente,
            direccion: datosComanda.direccion,
            items: itemsProcesados,
            total: totalPedido
        };

        comandasData.push(nuevaComanda);
        return nuevaComanda;
    }

    obtenerTodas() {
        return comandasData;
    }

    buscarPorId(id) {
        return comandasData.find(c => c.id === id);
    }
}

module.exports = new ComandasService();