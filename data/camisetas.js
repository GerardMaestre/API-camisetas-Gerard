const camisetas = [

    {
        id: 1,
        nombre: "camiseta basica",
        descripcion: "es un camiseta muy simple",
        precioBase: 16,
        tallas:["S","M","L","XL"],
        colores:["Blanco","Negra","Roja"],
        imagenes: {
            "Blanco":"/img/basica-blanca.jpg",
            "Negra":"/img/basica-negra.jpg",
            "Roja":"/img/basica-roja.jpg"
        },
        tags:["basica","grande","oversize","solo para hombres"]
    },
    {
        id: 2,
        nombre: "comiseta menos basica",
        descripcion: "es una camiseta menos basica que la otra",
        precioBase: 30,
        tallas: ["S","M","L","XL"],
        colores:["Blanco","Negra","Roja"],
        imagenes: {
            "Blanco":"/img/basica-blanca.jpg",
            "Negra":"/img/basica-negra.jpg",
            "Roja":"/img/basica-roja.jpg"
        },
        tags:["basica","grande","oversize","solo para hombres"]
    },
    {
        id: 3,
        nombre: "comiseta muy buena",
        descripcion: "es una camiseta que es muy buena",
        precioBase: 50,
        tallas: ["S","M","L","XL"],
        colores:["Blanco","Negra","Roja"],
        imagenes: {
            "Blanco":"/img/basica-blanca.jpg",
            "Negra":"/img/basica-negra.jpg",
            "Roja":"/img/basica-roja.jpg"
        },
        tags:["basica","para mujer","oversize",""]
    }
];


module.exports = camisetas;
