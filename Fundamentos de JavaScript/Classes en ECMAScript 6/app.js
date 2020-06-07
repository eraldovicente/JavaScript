class Cliente {
     constructor(nombre, saldo) {
          this.nombre = nombre;
          this.saldo = saldo;
     }
     imprimirSaldo() {
          return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
     }

     // tipoCliente() {
     //      let tipo;
     //      if (this.saldo > 10000) {
     //           tipo = 'Gold';
     //      } else if (this.saldo > 5000) {
     //           tipo = 'Platinum';
     //      } else {
     //           tipo = 'Normal';
     //      }
     //      return tipo;
     // }

     // retirarSaldo(retiro) {
     //      return this.saldo -= retiro;
     // }

     static bienvenida() {
          return `Bienvenido al cajero`;
     }
}

// const maria = new Cliente('Maria', 'Perez', 10000);
// maria.retirarSaldo(3000);

// console.log( Cliente.bienvenida() );

class Empresa extends Cliente {
     constructor(nombre, saldo, telefono, tipo) {
          // Va hacia el constructor Padre
          super(nombre, saldo);
          // no existen en el construstor padre
          this.telefono = telefono;
          this.tipo = tipo;
     }
}

const empresa = new Empresa('Empresa1', 10000, 99999999, 'Construccion');

console.log(empresa);
