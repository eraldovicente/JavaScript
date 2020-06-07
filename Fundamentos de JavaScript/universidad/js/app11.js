// varibles

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// Click
// boton.addEventListener('click', obtenerEvento);
// double click
// boton.addEventListener('dblclick', obtenerEvento);
// Mouse enter
// boton.addEventListener('mouseenter', obtenerEvento);
// mouse leave
// boton.addEventListener('mouseleave', obtenerEvento);
// mouse over
// boton.addEventListener('mouseover', obtenerEvento);
// mouse out
// boton.addEventListener('mouseout', obtenerEvento);
// mouse down
// boton.addEventListener('mousedown', obtenerEvento);
// mouse up
// boton.addEventListener('mouseup', obtenerEvento);
// mouse move
boton.addEventListener('mousemove', obtenerEvento);







function obtenerEvento(e) {
     console.log(`EVENTO: ${e.type}`);
}