const Vendedor = function(nombre) {
     this.nombre = nombre;
     this.sala = null;
}
const Comprador = function(nombre) {
     this.nombre = nombre;
     this.sala = null;
}

Vendedor.prototype = {
     oferta: function(articulo, precio) {
          console.log(`Temos el siguiente articulo ${articulo}, iniciamos en ${precio} `);
     }, 
     vendido: function(comprador) {
          console.log(`Vendido a ${comprador} (Sonido de mazo) `);
     }
}

Comprador.prototype = {
     oferta: function(mensaje, comprador) {
          console.log(`${comprador.nombre} : ${mensaje} `);
     }
}

const Subasta = function() {
     let compradores = {};

     return {
          registrar: function(usuario) {
               compradores[usuario.nombre] = usuario;
               usuario.sala = this;
               console.log(compradores);
          }
     }
}

// Instanciar las clases
const eraldo = new Comprador('Eraldo');
const gabrielCabecao = new Comprador('gabrielCabecao');
const mainha = new Comprador('mainha');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(eraldo);


console.log(eraldo); 

vendedor.oferta('Fusca', 300);
eraldo.oferta(3500, eraldo);
vendedor.vendido(eraldo.nombre);