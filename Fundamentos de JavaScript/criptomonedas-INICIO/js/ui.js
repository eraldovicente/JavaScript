class Interfaz {

     constructor() {
          this.init();
     }
     init() {
          this.construirSelect();
     }

     construirSelect() {
          cotizador.obtenerMonedasAPI()
               .then(monedas => {

                    // crear un select de opciones
                    const select = document.querySelector('#criptomoneda');

                    // iterar por los resultados de la api
                    for( const [key, value] of Object.entries(monedas.monedas.Data) ) {
                         // añadir el Symbol y el Nombre como opciones
                         const opcion = document.createElement('option');
                         opcion.value = value.Symbol;
                         opcion.appendChild(document.createTextNode(value.CoinName));
                         select.appendChild(opcion);
                    }
               })
     }

     mostrarMensaje(mensaje, clases) {
          const div = document.createElement('div');
          div.className = clases;
          div.appendChild(document.createTextNode(mensaje));

          // seleccionar mensajes
          const divMensaje = document.querySelector('.mensajes');
          divMensaje.appendChild(div);

          // mostrar contenido
          setTimeout(() => {
               document.querySelector('.mensaje div').remove();
          }, 3000);
     }

     // Imprime el resultado de la cotizacion

     mostrarResultado(resultado, moneda, crypto) {

          const datosMoneda = resultado[crypto][moneda];

          // recortar digitos de precio
          let precio = datosMoneda.PRICE.toFixed(2),
               porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
               actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('pt-BR');

          // construir el template
          let templateHTML = `
               <div class="card bg-warning">
                    <div class="card-body text-light">
                         <h2 class="card-title">Resultado:</h2>
                         <p>El Precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                         <p>Variacion ultimo dia: % ${porcentaje}</p>
                         <p>Ultima Actualizacion: ${actualizado}</p>
                    </div>
               </div>
          `;

          // insertar el resultado

          document.querySelector('#resultado').innerHTML = templateHTML;
     }
}