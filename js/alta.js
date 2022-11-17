

let inputs  
let form 
let button 
let camposValidos

const setCustomValidityJS = (mensaje, index) => {
        let divs = document.querySelectorAll('.form__div')
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

const renderProds = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', 'plantillas/listado.hbs')
        xhr.addEventListener('load', () => {
              if(xhr.status === 200) {
                let plantillaHbs = xhr.response
                console.log(plantillaHbs)

                let template = Handlebars.compile(plantillaHbs)
                console.log(template)

                let html = template({productos: productos})
                console.log(html)
                document.getElementById('listado-productos').innerHTML = html
              }  
        })
        xhr.send()
} 

function leerProductoIngresado() {
        return {
                
                        nombre: inputs[0].value,
                        precio: inputs[1].value,
                        stock: inputs[2].value,
                        marca: inputs[3].value,
                        categoria: inputs[4].value,
                        detalles: inputs[5].value,
                        foto: inputs[6].value,
                        envio: inputs[7].checked
                
        }
}

        function limpiarFormulario() { 
                inputs.forEach((input, index) => {

                inputs.forEach(input => input.value = '')             

                input.addEventListener('input',() => {
                validar(input.value, regExpValidar[index], index)
                })
        })
        button.disabled = true
        camposValidos = [false, false, false, false, false, false, false, false]
}

























function initAlta() {
        console.warn('initAlta()')
        
         inputs = document.querySelectorAll('.form-inputs')
         form = document.querySelector('.formulario-alta')
         button = document.querySelector('main form button')
        
        button.disabled = true
        
        const camposValidos = [false, false, false, false, false, false, false, false]
        
        
        

        form.addEventListener('submit', e => {
                e.preventDefault()
        
              
                
        
                productos.push(producto)
        
                
                console.log (productos)
        
                
                
                renderProds()
        })
        
        
        
        
        
        
        
        
        
        
       
        
        
        
        
        
        
        
        renderProds()


    } 
    



