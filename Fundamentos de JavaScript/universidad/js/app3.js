// let enlaces = document.getElementsByClassName('enlace');

// enlaces = enlaces[0];

// enlaces.style.background = '#333';
// enlaces.textContent = 'Nuevo enlace';

// const listaEnlaces = document.querySelector('#principal')
// .getElementsByClassName('enlace');

const links = document.getElementsByTagName('a');

// links[18].style.color = 'red';
// links[18].textContent = 'Nuevo enlace';

let enlaces = Array.from(links);

enlaces.forEach(function(enlace) {
     console.log(enlace.textContent);
});


// console.log(enlaces);