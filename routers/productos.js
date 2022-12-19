const express = require('express')
const routerProductos = express.Router()

const controlador = require('../controller/productos')

/* CRUD => CREATE / READ / UPDATE / DELETE */

/* GET ALL/ONE (READ) - request de todos los productos */
routerProductos.get('/:id?', controlador.obtenerProductos) // ?: Parametro no obligatorio

// localhost:8080/api/productos/  // => GET ALL
// localhost:8080/api/productos/1 // => GET ONE

/* POST (CREATE) - request para agregar un producto */
routerProductos.post('/', controlador.guardarProducto)

/* PUT (UDPATE) - request para actualizar un producto */
routerProductos.put('/:id', controlador.actualizarProducto)

/* PUT (DELETE) - request para borrar un producto */
routerProductos.delete('/:id', controlador.borrarProducto)

module.exports = routerProductos