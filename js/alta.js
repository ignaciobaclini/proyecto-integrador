function initAlta() {
        console.warn('initAlta()')

        const productos = [
                {nombre: 'reloj', precio: '1234', stock: '35', marca: 'seiko', categoria: 'despertador', detalles: 'analogico',  envio: true, foto: ''},
                {nombre: 'celular', precio: '1234434', stock: '325', marca: 'apple', categoria: 'celular', detalles: 'iphone 10',  envio: false, foto: ''},
                {nombre: 'computadora', precio: '1213134', stock: '352', marca: 'apple', categoria: 'macbook', detalles: '8gb ram',  envio: true, foto: ''}
        ]
        const camposValidos = [false, false, false, false, false, false, false, false]
        
        
        const inputs = document.querySelectorAll('.form-inputs')
        const form = document.querySelector('.formulario-alta')
        const button = document.querySelector('button')
        
        button.disabled = true
        
        console.log(inputs, form, button)
        
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
        
        inputs.forEach((input, index) => {
                input.addEventListener('input',() => {
                    validar(input.value, regExpValidar[index], index)
                })
        })
        
        form.addEventListener('submit', e => {
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
        
                //renderProdsObjetos()
        
                //renderProdsTemplateString() 
                
                renderProds()
        })
        
        
        const renderProdsObjetos = () => {
                  let html = ''
                  for (let i = 0; i < productos.length; i++) {
                        const element = productos[i];
                        html += `<p>${JSON.stringify(productos[i])}</p>`
                  } 
                  document.getElementById('listado-productos').innerHTML = html  
        
        
        
        
        }
        
        const renderProdsTemplateString = () => {
                let html = ''
                
                html += '<table>'
                console.log(html)
        
                html +=  ` 
                     <tr>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>stock</th>
                        <th>marca</th>
                        <th>categoria</th>
                        <th>detalles</th>
                        <th>foto</th>
                        <th>envio</th>
                     </tr> 
                `
                for (let i = 0; i > productos.length; i++) {
                        let producto = productos[i]
                        console.log(producto)
        
                        html += 
                        `
                           <tr>
                                <td>${producto.nombre}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.stock}</td>
                                <td>${producto.marca}</td>
                                <td>${producto.categoria}</td>
                                <td>${producto.detalles}</td>
                                <td>${producto.foto}</td>
                                <td>${producto.envio}</td>
                           </tr> 
                        
                        `
                }
        
                html += '</table>'
        
                document.getElementById('listado-productos').innerHTML = html
                
        }
        
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
        renderProds()


    } 
    



