let productos = []

async function obtenerproductos() {
    productos = await obtenerProductosService()
    renderProds()
}

async function guardarProducto(producto) {
    const productoGuardado = await productoService.guardarProductoService(producto)
    //console.log(productoGuardado)

    this.productos.push(productoGuardado)

    renderTablaAlta(null, this.productos)
}

async function actualizarProducto(id) { 
    console.log('actualizarProducto', id)

    const producto = formularioAlta.leerProductoIngresado()
    formularioAlta.limpiarFormulario()

    const productoActualizado = await productoService.actualizarProductoService(id, producto)
    // console.log(productoActualizado)

    const index = this.productos.findIndex(producto => producto.id == productoActualizado.id)
    this.productos.splice(index,1,productoActualizado)

    renderTablaAlta(null, this.productos)

} 

async function borrarProducto(id) { 
    console.log('borrarProducto', id)

    let productoBorrado = await productoService.borrarProductoService(id)

    const index = this.productos.findIndex(producto => producto.id == productoBorrado.id)
    this.productos.splice(index, 1)

    renderTablaAlta(null, this.productos)
}
