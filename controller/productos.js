const service = require('../service/productos')

const obtenerProductos = async (req, res) => {
    let id = req.params.id
    
    if(id) {
        const producto = await service.obtenerProducto(id)
        return res.status(200).json(producto)
    } else {
        const productos = await service.obtenerProductos()
        return res.status(200).json(productos)
    }

}
const guardarProducto = async (req, res) => {
    const producto = req.body
    const productoGuardado = await service.guardarProducto(producto)
    res.status(201).json(productoGuardado)
}
const actualizarProducto = (req, res) => {
    res.send('Soy un controlador re piola')
}
const borrarProducto = (req, res) => {
    res.send('Soy un controlador re piola')
}

module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}