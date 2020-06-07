document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarREST);

function cargarTXT() {
     fetch('datos.txt')
          .then(function(res) {
               return res.text();
          })
          .then(function(empleados) {
               console.log(empleados);
               document.getElementById('resultado').innerHTML = empleados;
          })
          .catch(function(error) {
               console.log(error);
          });
}

function cargarJSON() {
     fetch('empleados.json')
          .then(function(res) {
               return res.json();
          })
               .then(function(data) {
                    console.log(data);
                    let html = '';
                    data.forEach(function(empleado) {
                         html += `
                              <li>${empleado.nombre} ${empleado.puesto}</li>
                         `;
                    });
                    document.getElementById('resultado').innerHTML = html;
               })
               .catch(function(error) {
                    console.log(error);
               });
}


function cargarREST() {
     fetch('https://picsum.photos/list')
          .then(function(res) {
               return res.json();
          })
          .then(function(imagenes) {
               let html = '';

               imagenes.forEach(function(imagen) {
                    html += `
                         <li>
                              <a href="${imagen.post_url}" target="_blank">Ver Imagem</a>
                              ${imagen.author}
                         </li>
                    `;
               });
               document.getElementById('resultado').innerHTML = html;

          })
}