// Exportar variables
export const nombreCliente = 'Eraldo';
export let ahorro = 200;

// Exportar funciones
export function mostrarInformacion(nombre, ahorro) {
     return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function mostrarNombre(nombre) {
     return `Nombre del Cliente: ${nombre}`;
}

// Exportar una clase

export class Cliente {
     constructor(nombre, ahorro) {
          this.nombre = nombre;
          this.ahorro = ahorro;
     }

     mostrarInformacion() {
          return `Cliente${this.nombre} - Ahorro: ${this.ahorro}`;
     }
}