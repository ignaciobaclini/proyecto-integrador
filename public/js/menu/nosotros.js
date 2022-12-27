function initNosotros() {
    console.warn('initNosotros()')

    const nosotrosMain = document.querySelector('.main-nosotros')

    nosotrosMain.innerHTML = `
    <div class="img__nosotros">
    <div class="img__nosotross">
        <img class="img__nosotros-tienda" src="img/productos/nuestratienda.jpg" alt="tienda apple">
        <h2>nuestra tienda</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="boton2" type="submit">ver mas</button>
    </div>
</div>
<div class="img__varias">
    <div class="img__varias-noticias">
        <img src="img/productos/enteratedelonuevo.jpg" alt="noticias de apple">
        <h2>noticias</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="boton2" type="submit">ver mas</button>
    </div>
    
    <div class="img__varias-unite"><img src="img/productos/sumateanosotros.jpg" alt="sumate a nuestro equipo">
    <h2>sumate a nuestro equipo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    <button class="boton2" type="submit">ver mas</button>
    </div>
</div>
    
    `
}


