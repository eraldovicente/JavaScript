// Reemplazar elementos

const nuevoEncabezado = document.createElement('h2')

// Agregar un id
nuevoEncabezado.id = 'encabezado';
// agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos!'));
// Elemento anterior será reemplazado
const anterior = document.querySelector('#encabezado');
// Elemento padre
const elPadre = document.querySelector('#lista-cursos');

// Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);