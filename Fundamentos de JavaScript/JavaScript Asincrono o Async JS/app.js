// Callback en Foreach

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

// Inline Callback
// ciudades.forEach(function(ciudad) {
//      console.log(ciudad);
// });

// Con function definida
// function callback(ciudad) {
//      console.log(ciudad);
// }
// ciudades.forEach(callback);

// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback) {
     setTimeout(function() {
          paises.push(pais);
          callback();
     }, 2000);
}

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
     setTimeout(function() {
          let html = '';
          paises.forEach(function(pais) {
               html += `<li>${pais}</li>`;
          });
          console.log(html);
          document.getElementById('app').innerHTML = html;
     }, 1000);
}

// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);

// Mostrar los paises
mostrarPaises();