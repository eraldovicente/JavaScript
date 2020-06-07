// Delegation

document.body.addEventListener('click', eliminarElemento);


function eliminarElemento(e) {
     e.preventDefault();

     // console.log('Click!');

     // console.log(e.target.classList);

     // if (e.target.classList.contains('borrar-curso')) {
     //      // console.log('Si!');
     //      console.log(e.target.parentElement.parentElement.remove() );
     // } else {
     //      console.log('No!');
     // }

     if (e.target.classList.contains('agregar-carrito')) {
          console.log('Curso agregado');
     }
}