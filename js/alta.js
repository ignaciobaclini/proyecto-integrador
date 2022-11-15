const productos = []
const camposValidos = [false, false, false, false, false, false, false]

const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const button = document.querySelector('button')

console.log(inputs, form, button)

const setCustomValidityJS = () => {

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

]    

inputs.forEach((input, index) => {
        input.addEventListener('input',() => {
            validar(input.value, regExpValidar[index])
        })
})

const renderProdsObjetos = () => {

}

const renderProdsTemplateString = () => {

}

