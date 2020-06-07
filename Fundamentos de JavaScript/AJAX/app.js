document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
     // Crear el objeto xmlhttprequest
   
     const xhr = new XMLHttpRequest();
   
     // Abrir uma conexion
     xhr.open('GET', 'datos.txt', true);
     
     xhr.onreadystatechange = function() {

          console.log(`Estado ${this.readyState}`);

          if (this.readyState === 4 && this.status === 200) {
               console.log(this.responseText);
          }
          
     }

     // ready status
     /*
     0 - No inicializado
     1 - Conexion estabelecida
     2 - Recebido
     3 - Procesando
     4 - Respuesta lista
     */

     // uma vez que carga
     // xhr.onload = function() {
     //      // 200 : Correcto | 403 : Prohibido | 404 No encontrado
     //      if (this.status === 200) {
     //           document.getElementById('listado').innerHTML = `<h1> ${this.responseText} </h1>`;
     //      }
     // }
     // Enviar el request
     xhr.send();
}