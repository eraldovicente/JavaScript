// const enlaces = document.querySelectorAll('.enlace');
// const navegacion = document.querySelector('#principal');

// // enlaces[0].remove();
// navegacion.removeChild(enlaces[0]);

// console.log(navegacion);

const primerLi = document.querySelector('.enlace');

let elemento;

// obetener una clase CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// leer atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', 20);
elemento = primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id') ;

elemento = primerLi; 

console.log(elemento);