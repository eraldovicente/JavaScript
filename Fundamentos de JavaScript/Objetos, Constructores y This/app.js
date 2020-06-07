// Object Literal

// const cliente = {
//      nombre: 'Juan',
//      saldo: 600,
//      tipoCliente: function() {
//           let tipo;

//           if (this.saldo > 1000) {
//                tipo = 'Gold';
//           } else if (this.saldo > 500) {
//                tipo = 'Platinum';
//           } else {
//                tipo = 'Normal';
//           }
//           return tipo;
//      }
// }

// console.log(cliente.tipoCliente() );

// Método alternativo

// function Cliente(nombre, saldo) {
//      this.nombre = nombre;
//      this.saldo = saldo;
//      this.tipoCliente = function() {
//           let tipo;

//           if (this.saldo > 1000) {
//                tipo = 'Gold';
//           } else if (this.saldo > 500) {
//                tipo = 'Platinum';
//           } else {
//                tipo = 'Normal';
//           }
//           return tipo;
//      }
// }


// const persona = new Cliente('Pedro', 20000);
// const persona2 = new Cliente('Karen', 6000);

// console.log(persona2.tipoCliente());

// String

// const nombre1 = 'Pedro';
// const nombre2 = new String('Pedro');

// console.log(typeof nombre2);

// // Números
// const numero1 = 20;
// const numero2 = new Number(20);

// // boolean
// const boolean1 = true;
// const boolean2 = new Boolean(true);

// // Funciones
// const funcion1 = function(a, b) {
//      return a + b;
// }

// // Objetos
// const persona1 = {
//      nombre: 'Juan'
// }

// const persona2 = new Object({nombre: 'Juan'});

// const funcion2 = new Function('a', 'b', 'return 1 + 2');

// // Arreglos
// const arreglo1 = [1,2,3,4];
// const arreglo2 = new Array(1,2,3,4);

// console.log(arreglo1);
// console.log(arreglo2);

// Prototipos
// function Cliente(nombre, saldo) {
//      this.nombre = nombre;
//      this.saldo = saldo;
// }
// Crear un Prototype
// Cliente.prototype.tipoCliente = function() {
//      let tipo;
//      if (this.saldo > 1000) {
//           tipo = 'Gold';
//      } else if (this.saldo > 500) {
//           tipo = 'Platinum';
//      } else {
//           tipo = 'Normal';
//      }
//      return tipo;
// }  
// Prototipo que imprime saldo y nombre
// Cliente.prototype.nombreClienteSaldo = function() {
//      return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}`;
// }

// Retirar saldo
// Cliente.prototype.retirarSaldo = function(retiro) {
//      return this.saldo -= retiro;
// }

// const cliente1 = new Cliente('Pedro', 100);

// cliente1.retirarSaldo(300);

// console.log(cliente1);

// // Banca para empresas
// function Empresa(nombre, saldo, telefono, tipo) {
//      Cliente.call(this, nombre, saldo);
//      this.telefono = telefono;
//      this.tipo = tipo;
// }
// Empresa.prototype = Object.create(Cliente.prototype);

// const empresa = new Empresa('Udemy', 100000000, 99999999, 'Educacion' );

// console.log(empresa.nombreClienteSaldo() );

// Object Create

const Cliente = {
     imprimirSaldo: function() {
          return `hola ${this.nombre} tu saldo es ${this.saldo}`
     },
     retirarSaldo: function(retiro) {
          return this.saldo -= retiro;
     }
}
// Crear el objeto
const mary = Object.create(Cliente);

console.log(mary);