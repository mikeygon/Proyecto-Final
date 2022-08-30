//----- Buscador-------//

const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let producto of stockProductos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML += `
        
           <img src=${producto.imagen} class="imag" alt= "foto">
           <h3>${producto.nombre}</h3>
           <p class="precioProducto">Precio:$ ${producto.precio}</p>
           <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

           `
           resultado.appendChild(div)
        }
    }
   if(resultado.innerHTML === ''){
    resultado.innerHTML += `
      <li> Resultado no encontrado....</li>
    `
   }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup',filtrar)