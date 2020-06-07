const cotizador = 
new API('42e633f2169c0e626e7c8db75800b63046189c578710ed503c598f0e730482ee');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventListener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la moneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

     // comprobar que ambos campos tengan algo seleccionado
     if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     } else {
          // todo bien, consultar api
          cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
               .then(data => {
                    ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada );
               })
     }

});