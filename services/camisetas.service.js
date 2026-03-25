const camisetasData = require('../data/camisetas');

class CamisetasService {
    
    obtenerTodas(query) {
        if (!query) return camisetasData;

        let resultado = [...camisetasData]; 

        if (query.talla) {
            resultado = resultado.filter(c => c.tallas.includes(query.talla));
        }

        if (query.color) {
            resultado = resultado.filter(c => 
                c.colores.some(col => col.toLowerCase() === query.color.toLowerCase())
            );
        }

        if (query.tag) {
            resultado = resultado.filter(c => c.tags.includes(query.tag));
        }

        if (query.q) {
            const termino = query.q.toLowerCase();
            resultado = resultado.filter(c => 
                c.nombre.toLowerCase().includes(termino) || 
                c.descripcion.toLowerCase().includes(termino)
            );
        }

        if (query.sort) {
            const estrategiasDeOrden = {
                'precio_asc': (a, b) => a.precioBase - b.precioBase,
                'precio_desc': (a, b) => b.precioBase - a.precioBase,
                'nombre_asc': (a, b) => a.nombre.localeCompare(b.nombre),
                'nombre_desc': (a, b) => b.nombre.localeCompare(a.nombre)
            };

            const ordenar = estrategiasDeOrden[query.sort];

            if (ordenar) {
                resultado.sort(ordenar);
            }
        }

        return resultado;
    }

    buscarPorId(id) {
        return camisetasData.find(item => item.id === parseInt(id));
    }
}

module.exports = new CamisetasService();