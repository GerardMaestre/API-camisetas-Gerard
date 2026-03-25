# **API TeeLab**

API REST para la gestión de un catálogo de camisetas y un sistema de comandas (pedidos), construida con Node.js y Express.

## **Cómo arrancar el proyecto**

1. Instalar las dependencias del proyecto:  
   npm install

2. Iniciar el servidor (modo desarrollo con Nodemon):  
   npm run dev

El servidor estará corriendo en http://localhost:3000

## **Lista de Endpoints**

### **Catálogo de Camisetas**

* **GET /api/camisetas** \- Obtiene el catálogo completo.  
  * **Filtros (Query Params):** ?talla=S, ?color=negro, ?tag=nuevo, ?q=palabra  
  * **Ordenamiento:** ?sort=precio\_asc (opciones: precio\_desc, nombre\_asc, nombre\_desc)  
* **GET /api/camisetas/:id** \- Obtiene el detalle de una camiseta específica por su ID.

### **Comandas (Pedidos)**

* **POST /api/comandas** \- Crea un nuevo pedido calculando los subtotales y el total. Requiere enviar los datos del cliente, dirección e items en formato JSON en el cuerpo de la petición.  
* **GET /api/comandas** \- Lista todas las comandas creadas.  
* **GET /api/comandas/:id** \- Obtiene el detalle de un ticket/pedido específico por su ID.