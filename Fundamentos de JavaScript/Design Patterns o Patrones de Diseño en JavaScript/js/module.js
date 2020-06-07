const comprarBoleto = (function() {

     // Privado
     let evento = 'Conferencia JS 2020';
     // let precio = 200;

     const adquirirBoleto = () => {
          const elemento = document.createElement('p');
          elemento.textContent = `Comprando boleto para: ${evento}`;
          document.querySelector('#app').appendChild(elemento);
     }

     // Publico
     return {
          mostrarBoleto: function() {
               // console.log(evento);
               // console.log(precio);
               adquirirBoleto(); 
          }
     }
})();

// console.log(evento);

comprarBoleto.mostrarBoleto();
// console.log(precio);

// console.log(comprarBoleto.evento);