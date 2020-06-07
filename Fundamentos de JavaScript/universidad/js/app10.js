// Event Listener clique ao buscador

// document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton); 

// function ejecutarBoton(e) {
//      e.preventDefault();

//      let elemento;
//      elemento = e;
//      elemento = e.target;
//      elemento = e.target.id;
//      elemento = e.target.className;
//      elemento = e.target.innerText;

//      console.log(elemento);
//      // console.log('Desde la funcion ejecutar boton');
// }

document.querySelector('#encabezado').addEventListener('click', function(e) {
     // e.target.innerText = 'Nuevo encabezador';
     e.target.innerText = 2 + 2;
     // console.log();
});