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
            switch (query.sort) {
                case 'precio_asc':
                    resultado.sort((a, b) => a.precioBase - b.precioBase);
                    break;
                case 'precio_desc':
                    resultado.sort((a, b) => b.precioBase - a.precioBase);
                    break;
                case 'nombre_asc':
                    resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
                    break;
                case 'nombre_desc':
                    resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));
                    break;
            }
        }

        return resultado;
    }

    buscarPorId(id) {
        return camisetasData.find(item => item.id === parseInt(id));
    }
}

module.exports = new CamisetasService();