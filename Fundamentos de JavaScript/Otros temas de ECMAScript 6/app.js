// const cliente = {
//      nombre : 'Alejandra',
//      tipo : 'Premium'
// }
// // let nombre = cliente.nombre,
// //      tipo = cliente.tipo;

// // let {nombre, tipo} = cliente;

// nombre = 'Pedro'
// tipo = 'Gold';

// ( {nombre, tipo} = cliente );

// // console.log(cliente);
// console.log(nombre);
// console.log(tipo);

// const cliente = {
//      tipo: 'Premium',
//      nombre: 'Antonio',
//      datos: {
//           ubicacion: {
//                ciudad: 'Jalisco',
//                pais: 'Mexico'
//           },
//           cuenta: {
//                desde: '10-12-2012',
//                saldo: 4000
//           }
//      }
// }

// // console.log(cliente);

// let { datos: {ubicacion} } = cliente;
// console.log(ubicacion);
// console.log(ubicacion.ciudad);
// console.log(ubicacion.pais);

// let { datos: {cuenta} } = cliente;
// console.log(cuenta);
// console.log(cuenta.saldo);
// console.log(cuenta.desde);

// const cliente = {
//      nombre: 'Pedro',
//      tipo: 'Premium',
//      saldo: 3000
// }

// let { nombre, tipo, saldo = 0 } = cliente;

// console.log(nombre);
// console.log(tipo);
// console.log(saldo);

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

// const [
//      primeraCiudad,
//      segundaCiudad
// ] = ciudades;

// const [ , , ciudad, paris]  = ciudades;

// console.log(primeraCiudad);
// console.log(segundaCiudad);

// console.log(ciudad);
// console.log(paris);


// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
//      idioma: 'ingles'
// }];

// console.log(ciudades);

// [idioma] = ciudades;

// console.log(idioma);

// Ejemplo avanzado

// const cliente = {
//      tipo: 'Premium',
//      saldo: 30000,
//      datos: {
//           nombre: 'Pedro',
//           apellid: 'Perez',
//           residencia: {
//                ciudad: 'Mexico'
//           }
//      },
//      movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
// }
// let {
//      tipo,
//      datos,
//      datos: {residencia},
//      movimientos: [uno]
// } = cliente;


// console.log(uno);


// // Destructuring forma anterior

// function reservacion(completo, opciones) {
//      opciones = opciones || {};

//      // console.log(opciones);
//      let metodo = opciones.metodoPago, 
//           cantidad = opciones.cantidad,
//           dias = opciones.dias;

//           console.log(metodo);
//           console.log(cantidad);
//           console.log(dias);
// }

// // 
// reservacion(
//      true,
//      {
//           metodoPago: 'tarjeta',
//           cantidad: 2000,
//           dias: 3
//      }
// );


// Destructuring forma nova

// function reservacion(completo, opciones) {
//      let {metodoPago, cantidad, dias} = opciones;

//      console.log(metodoPago);
//      console.log(cantidad);
//      console.log(dias);
// }

// // 
// reservacion(
//      true,
//      {
//           metodoPago: 'tarjeta',
//           cantidad: 2000,
//           dias: 3
//      }
// );


// function reservacion(completo,
//           {
//                metodoPago = 'efetivo', 
//                cantidad = 0, 
//                dias = 0
//           } = {}
//      )
// {
//      if (completo) {
//           console.log('proceder a reservar...');
//      } else {
//           console.log('Abandonar');
//      }

//      // console.log(metodoPago);
//      // console.log(cantidad);
//      // console.log(dias);
// }

// // 
// reservacion(
//      false,
//      {

//      }
// );


// Symbol

// const simbolo = Symbol();
// const simbolo2 = Symbol('Descripcion aqui');

// console.log(Symbol() === Symbol() );

// console.log(simbolo2);

// let nombre = Symbol();
// let apellido = Symbol();

// // Crear una persona
// let persona = {}
// persona.nombre = 'Juan';
// persona[nombre] = 'Juan';
// persona[apellido] = 'De la torre';

// console.log(persona);
// console.log(persona[nombre]);

// for( let i in persona) {
//      console.log(` ${i} : ${persona[i]}`);
// }

// Set

// let carrito = new Set();
// carrito.add('camisa');
// carrito.add('Disco #1');
// carrito.add('Disco #2');
// carrito.add('Disco #3');
// carrito.add('Disco #3');


// let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4]);

// console.log(numeros);
// console.log(numeros.size);

// console.log(carrito);
// console.log(carrito.size);

// comprobar que un valor exista
// console.log( carrito.has('camisa') );

// carrito.delete('camisa');

// carrito.clear();

// console.log(carrito);

// carrito.forEach((producto) => {
//      console.log(producto);
// });

// como converter un ser a arreglo

// const arregloCarrito =  [...carrito];

// console.log(arregloCarrito);

// Maps

// let cliente = new Map();
// cliente.set('nombre', 'Karen');
// cliente.set('tipo', 'Premium');
// cliente.set('saldo', 3000);

// acceder a los valores

// console.log(cliente.get('nombre'));
// console.log(cliente.get('tipo'));
// console.log(cliente.get('saldo'));

// métodos para los maps
// tamaño del map
// console.log(cliente.size);
// Si queremos comporbar que un valor existe
// console.log(cliente.has('nombre'));
// console.log(cliente.get('tipo'));

// console.log(cliente);

// Borrar un elemento del map

// cliente.delete('nombre');
// console.log(cliente);

// cliente.clear();
// console.log(cliente);

// const paciente = new Map(
//      [
//           ['nombre', 'paciente'],
//           ['cuarto', 'No definido']
//      ]
// );

// paciente.set('nombre', 'Antonio');
// paciente.set('habitacion', 400);

// console.log(paciente);

// Iteradores

// function crearIterador(carrito) {
//      // Inicializamos el indice
//      let i = 0;

//      return {
//           siguiente: () => {
//                let fin = 0;

//                return {
//                     siguiente: () => {
//                          let fin = (i >= carrito.length);

//                          let valor = !fin ? carrito[i++] : undefined;

//                          return {
//                               fin: fin,
//                               valor: valor
//                          }
//                     }
//                }
//           }
//      }
// }

// const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// const recorrerCarrito = crearIterador(carrito);

// console.log( recorrerCarrito.siguiente());

// Generadores

// function *crearGenerador() {
//      // yield
//      yield 1;
//      yield 'Nombre';
//      yield 3+3;
//      yield true;
// }

// const iterador = crearGenerador();

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

// function *nuevoGenerador() {
//      for(let i = 0; i < carrito.length; i++) {
//           yield carrito[i];
//      }
// }

// // creamos el carrito
// const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// // recorremos el iterador
// let iterador = nuevoGenerador(carrito);

// console.log( iterador.next().value );

// Expressões regulares

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

let valor, expoReg;

expReg = /[0-9]/;
valor = 1992;

// Una fecha en exp regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

// Hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';

expReg = /\d\d:\d\d \D\D/;
valor = '10:30 AM';

expReg = /\d+/;
valor = 123345556765567

// Negar la expression
expReg = /[^0-9]/;
valor = 1992;

// La sintaxis {1,2}
expoReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018';
valor = '5-6-2020';

// Letras o numeros
expReg = /\w+/;
valor = 'Mensaje de prueba';
valor = 12234;
valor = ' ';

// revisar que sean puros numeros
expReg = /\d+/;
valor = 1234;

expoReg = /([0-9])\w+/;
valor = 1234;

// Texto sean puras mayusculas
expReg = /(A-Z)\w/;

console.log(expReg.test(valor));