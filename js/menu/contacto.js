function initContacto() {
    console.warn('initContacto()')

    const contactoMain = document.querySelector('.main-contacto')

    contactoMain.innerHTML = `
    <form action="" class="form">
        <ul class="form__lista">
            <li class="form__lista-li"> <label class="label" for="nombre">Nombre</label>
                <input class="input" type="text" name="nombre" id="nombre">
            </li>
            <li class="form__lista-li"> <label class="label" for="emali">Mail</label>
                <input class="input" type="text" name="emali" id="emali"></li>
            <li class="form__lista-li"> <label class="label" for="celular">Celular</label>
                <input class="input" type="number" name="celular" id="celular"></li>
            <li class="form__lista-li"> <label class="label" for="motivo">Motivo</label>
                <input class="input" type="text" name="motivo" id="motivo"></li>
            <li class="form__lista-li"> 
                <textarea class="textarea" name="consulta" >Consulta</textarea>
            </li>
            <li class="form__lista-li">
                <button class="boton" type="submit">Enviar</button>
            </li>
        </ul>
    </form>
    
    `

}


