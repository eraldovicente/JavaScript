// getElementById

// let elemento;

// elemento = document.getElementById('hero');
// elemento = elemento.id;
// elemento = document.getElementById('hero').id;
// elemento = document.getElementById('header').className;

// console.log(elemento);

let encabezado;

encabezado = document.getElementById('encabezado');
// encabezado = document.getElementById('encabezado').id;
// encabezado = document.getElementById('encabezado').className;
// encabezado = document.getElementById('encabezado').textContent;
// encabezado = document.getElementById('encabezado').innerText;
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

// Cambiar el texto
encabezado.textContent = 'Los mejores Cursos';
encabezado.innerText = 'Los Cursos';


console.log(encabezado.innerText);