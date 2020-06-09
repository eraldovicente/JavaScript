const restaurApp = {};
restaurApp.platillos = [
     {
          platillo: 'Pizza',
          precio: 25
     },
     {
          platillo: 'Hamburguesa',
          precio: 20
     },
     {
          platillo: 'Hot Dog',
          precio: 15
     }
]


// funciones

restaurApp.funciones = {
     ordenar: id => {
          console.log(`Tu Platilla: ${restaurApp.platillos[id].platillo} se está preparando
          `);
     },
     agregarPlatillo: (platillo, precio) => {
          const nuevo = {
               platillo,
               precio
          }
          restaurApp.platillos.push(nuevo);
     },
     mostrarMenu: platillos => {
          console.log(`Bienvenido a nuestro menu: `);
          platillos.forEach( (platillo, index) => {
               console.log(`${index} : ${platillo.platillo} $ ${platillo.precio
               }`);
          });
     }
}

console.log(restaurApp);
const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu( platillos );
restaurApp.funciones.ordenar(2); 

restaurApp.funciones.agregarPlatillo('Pastel', 15);
restaurApp.funciones.mostrarMenu( platillos );