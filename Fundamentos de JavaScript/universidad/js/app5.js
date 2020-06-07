// const navegacion = document.querySelector('#principal');

// console.log(navegacion.nodeName);

// console.log(navegacion.children[0].nodeName);console.log(navegacion.children[0].nodeType);console.log(navegacion.children);

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].lastChild);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].childElementCount);

// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = comentarios
// 9 = documentos
// 10 = doctype 