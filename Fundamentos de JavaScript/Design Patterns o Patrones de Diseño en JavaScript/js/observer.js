// Tambien se le conoce como suscriptor-publicador

let observer = {
     obtenerOfertas: function(callback) {
          if (typeof callback === "function") { 
               this.subscribers[this.subscribers.length] = callbacks;
          }
     },
     cancelarOfertas: function(callback) {
          for(let i = 0; i < this.subscribers.legth; i++) {
               if (this.subscribers.[i] === callback) {
                    delete this.subscribers[i];
               }
          }
     },
     publicarOferta: function(oferta) {
          for(let i = 0; i < this.subscribers.legth; i++) {
               if ( typeof this.subscribers[i] === 'function' ) {
                    this.subscribers[i];
               }
          } 
     },
     crear: function(objeto) {
          for( let i in this) {
               if (this.hasOwnProperty(i) ) {
                    objeto[i] = this[i];
                    objeto.subscribers = [];
               }
          }
     }
}

// Vendedores
const udemy = {
     nuevoCurso: function() {
          const curso = 'Un nuevo curso de JavaScript';
          this.publicarOferta(curso);
     }
}
const facebook = {
     nuevoAnuncio: function() {
          const oferta = "Compra un celular";
          this.publicarOferta(oferta);
     }
}

// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const juan = {
     compartir: function(oferta) {
          console.lo('Excelente oferta! ' + oferta);
     }
};

const karen = {
     interesa: function(oferta) {
          console.lo('Me interesa la oferta de ' + oferta);
     }
}

udemy.obtenerOfertas( juan.compartir );
udemy.obtenerOfertas( karen.interesa ); 
udemy.nuevoCurso();
udemy.cancelarOfertas( karen.interesa );
udemy.nuevoCurso();