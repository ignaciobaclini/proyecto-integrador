let productos = []

async function obtenerproductos() {
    productos = await obtenerProductosService()
    renderProds()
}