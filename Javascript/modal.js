const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalContainer = document.getElementsByClassName('container')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const modalPague = document.getElementsByClassName('modal-pago')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})


contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})

modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
    
})
modalContainer.addEventListener('click', (event) => {
    modalContainer.classList.toggle('modal-show')
})
modalPague.addEventListener('click', (event) => {
    event.stopPropagation() 
    
})

