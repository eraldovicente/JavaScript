// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
// console.log(carrito);


// node_modules\.bin\webpack src\index.js

// npm run ejecutar

// npm run watch

// npm install --save-dev style-loader css-loader

import '../css/style.scss';

// class Cliente {
//      constructor(nombre) {
//           this.nombre = nombre;
//      }
// }

// const cliente = new Cliente('Eraldo');
// console.log(cliente);

// console.log('Desde el Inicio');

const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4'];

let html = '';
clientes.forEach(cliente => {
     html += `
          <li>${cliente}</li>
     `;
});

document.querySelector('#clientes').innerHTML = html;