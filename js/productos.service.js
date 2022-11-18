URL_PRODUCTOS = 'https://615d8b5212571a00172076ba.mockapi.io/productos/'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    return productos

}

async function guardarProductoService(producto) {
    const productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
    // console.log(productoGuardado)
    return productoGuardado
}

async function actualizarProductoService(id, producto) {
    const productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
    // console.log(productoActualizado)
    return productoActualizado
}

async function borrarProductoService(id) {
    const productoBorrado = await http.del(this.URL_PRODUCTOS, id)
    // console.log(productoBorrado)
    return productoBorrado
}

