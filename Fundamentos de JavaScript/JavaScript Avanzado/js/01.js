// function persona(nombre) {
//      console.log(`Hola soy ${nombre}`);
// }

// persona('Eraldo');


// This con Implicit binding

const usuario = {
     nombre: 'Eraldo',
     edad: 20,
     presentacion() {
          console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
     },
     mascota: {
          nombre: 'Cachorra',
          edad: 3,
          presentacion() {
               console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
          }
     }
}

usuario.presentacion();
usuario.mascota.presentacion();