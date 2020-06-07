import { nombreCliente, ahorro, Cliente } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion, Empresa } from './empresa.js';
// import * as cliente from './cliente.js';

// console.log(cliente);

// console.log(nombreCliente);
// console.log(ahorro);

// const info = mostrarInformacion(nombreCliente, ahorro);
// console.log(info);

// const infoEmpresa = mostrarInformacion(nombreEmpresa, ahorro, categoria);
// console.log(infoEmpresa);

// // Utilizar la clase
// let cliente = new Cliente(nombreCliente, ahorro);
// console.log(cliente.mostrarInformacion() );
// console.log(nombreCliente);
// console.log(nombreEmpresa);

// console.log(ahorro);
// console.log(ahorroEmpresa);

// console.log(categoria);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion() );