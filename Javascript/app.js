const contenedorProductos = document.getElementById('container')
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('.resultado')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const botonFinalizar = document.getElementById('finalizar-compra')

const contadorCarrito = document.getElementById('contadorCarrito')

const cartelFinal = document.getElementById('finalizacion')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.imagen} class="imag" alt= "foto">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)   

    const boton = document.getElementById(`agregar${producto.id}`)
  

    boton.addEventListener('click', () => {
 
        agregarAlCarrito(producto.id)
        
    })
})

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
         actualizarCarrito()
 })
 
 botonVaciar.addEventListener('click', () => {
     carrito.length = 0
     actualizarCarrito()
 })
 
 //Para agregar al carro //
 const agregarAlCarrito = (prodId) => {
 
     //aumentar cantidad y no se repita //
     const existe = carrito.some (prod => prod.id === prodId) //prueba //
 
     if (existe){ 
         const prod = carrito.map (prod => {
           
             if (prod.id === prodId){
                 prod.cantidad ++
             }
         })
     } else { 
         const item = stockProductos.find((prod) => prod.id === prodId)
         carrito.push(item)
     }
     
     actualizarCarrito() 
 }
 
 const eliminarDelCarrito = (prodId) => {
     const item = carrito.find((prod) => prod.id === prodId)
 
     const indice = carrito.indexOf(item) 
 
     carrito.splice(indice, 1) 
     actualizarCarrito() 
     console.log(carrito)
 }
 
 
 
 const actualizarCarrito = () => {
    
     contenedorCarrito.innerHTML = "";
 
     
     carrito.forEach((prod) => {
         const div = document.createElement('div')
         div.className = ('productoEnCarrito')
         div.innerHTML = `
         <p>${prod.nombre}</p>
         <p>Precio:$${prod.precio}</p>
         <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
         <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
         `
 
         contenedorCarrito.appendChild(div)
         
         localStorage.setItem('carrito', JSON.stringify(carrito))
 
     })
     
     contadorCarrito.innerText = carrito.length 
     
     console.log(carrito)
     precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
 }
 
  botonFinalizar.addEventListener('click', btnClickFinal);
 
  function btnClickFinal() {
      contadorCarrito.innerHTML = '0';
      contenedorCarrito.innerHTML ='';
      let mensaje = `<div class="mensaje-final"> MUCHAS GRACIAS POR SU COMPRA!! </br>
        PUEDE PASATRLA A RECOGER POR NUESTRAS SUCURSALES!! </div>`;
 
      contenedorCarrito.innerHTML = mensaje;
 
     botonFinalizar.addEventListener('click', ()=>{
         contenedorModal.classList.toggle('modal-active')
 
     })
    
  }


 