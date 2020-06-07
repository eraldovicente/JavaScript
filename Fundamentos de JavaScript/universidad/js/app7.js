// Crear enlace

const enlace = document.createElement('a');

// Agregando una classe
enlace.className = 'enlace';
// Añadir id
enlace.id = 'nuevo-id';
// Atributo de href
enlace.setAttribute('href', '#');
// Añadir texto
// enlace.textContent = 'Nuevo Enlace';

enlace.appendChild(document.createTextNode('Nuevo Enlace'));

// Agregar al HTML
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);