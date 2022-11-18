URL_PRODUCTOS = 'https://615d8b5212571a00172076ba.mockapi.io/productos/'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    return productos

}
obtenerProductosService()