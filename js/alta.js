const productos = []
const camposValidos = [false, false, false, false, false, false, false, false]


const inputs = document.querySelectorAll('.form-inputs')
const form = document.querySelector('form')
const button = document.querySelector('button')

button.disabled = true

console.log(inputs[6], form, button)

const setCustomValidityJS = (mensaje, index) => {
        let divs = document.querySelectorAll('form div')
        divs[index].innerHTML = mensaje
        divs[index].style.display = mensaje ? 'block' : 'none'

}

const algunCampoValido = () => {
        let valido = 

        camposValidos[0] &&
        camposValidos[1] &&
        camposValidos[2] &&
        camposValidos[3] &&
        camposValidos[4] &&
        camposValidos[5] &&
        camposValidos[6] 

        return !valido
      
}


const validar = (valor, validador, index) => {
                console.log(valor, validador, index)
        if (!validador.test(valor)) {

             setCustomValidityJS('este campo no es valido', index)
             camposValidos[index] = false     
             button.disabled = true
             return null      
        }
        camposValidos[index] = true
        button.disabled = algunCampoValido()

        setCustomValidityJS('', index)
        return valor
}

const regExpValidar = [
        /^.+$/,  // regexp nombre
        /^.+$/,  // regexp precio
        /^[0-9]+$/, // regexp stock    
        /^.+$/,  // regexp marca
        /^.+$/,  // regexp categoria
        /^.+$/,  // regexp detalles
        /^.+$/,  // regexp foto
        /^.+$/,
]    

inputs.forEach((input, index) => {
        input.addEventListener('input',() => {
            validar(input.value, regExpValidar[index], index)
        })
})

form.addEventListener('sumbit', e => {
        e.preventDefault()

        const producto = {
                nombre: inputs[0].value,
                precio: inputs[1].value,
                stock: inputs[2].value,
                marca: inputs[3].value,
                categoria: inputs[4].value,
                detalles: inputs[5].value,
                foto: inputs[6].value,
                envio: inputs[7].checked
        }

        inputs.forEach(input => input.value = '')

        productos.push(producto)

        button.disabled = true
        console.log (productos)

        renderProdsObjetos()
})


const renderProdsObjetos = () => {
          let html = ''
          for (let i = 0; i < productos.length; i++) {
                const element = array[i];
                html += `<p>${JSON.stringify(productos[i])}</p>`
          } 
          document.getElementById('listado-productos').innerHTML = html  




}

const renderProdsTemplateString = () => {

}

