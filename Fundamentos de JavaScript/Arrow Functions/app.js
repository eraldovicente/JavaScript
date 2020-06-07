// funcion

let aprendiendo;

aprendiendo = function() {
     console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
     console.log('Aprendiendo JavaScript');
}

// Una linea no requiere llave
aprendiendo = () => console.log('Aprendiendo JavaScript');
// Retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
// Retorna Objeto
aprendiendo = () => ({aprendiendo: 'Aprediendo JavaScript'});
// pasar parametros
aprendiendo = (tecnologia) => console.log( `Aprendiendo ${tecnologia}` );
// Pasando 1 parametro
aprendiendo = tecnologia => console.log( `Aprendiendo ${tecnologia}` );
// Pasando 2 parametro
aprendiendo = (tecn1, tecn2) => console.log( `Aprendiendo ${tecn1} y ${tecn2}` );

const productos = ['Disco', 'Canisa', 'Guitarra'];

// const letrasProducto = productos.map(function(producto) {
//      return producto.length;
// });

// const letrasProducto = productos.map( producto => producto.length);

// console.log(letrasProducto);

productos.forEach(function(producto) {
     console.log(producto);
});

productos.forEach( producto => console.log(producto) );

productos.forEach( producto => producto);






