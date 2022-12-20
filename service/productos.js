const ProductoModel = require("../model/productos");

const model = ProductoModel.get('MONGODB')

const obtenerProducto = async id => {
    const producto = await model.readProducto(id)
    return producto
}

const obtenerProductos = async () => {
    const productos = await model.readProductos()
    return productos
}

const guardarProducto = async (producto) => {
    const productoGuardado = await model.createProducto(producto)
    return productoGuardado
}

module.exports = {
    obtenerProducto,
    obtenerProductos,
    guardarProducto
}