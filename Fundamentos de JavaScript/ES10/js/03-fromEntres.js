const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

console.log(map);
// map.delete('precio');
// console.log(map);

const objeto = Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;

console.log(objeto);