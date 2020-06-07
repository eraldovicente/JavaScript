async function leerTodos() {
     // esperar la respuesta
     const respuesta = await fetch
     ('https://jsonplaceholder.typicode.com/posts');

     // Procede cuanto la respuesta este hecha

     const datos = await respuesta.json();

     return datos;
}

leerTodos()
     .then( usuarios => console.log(usuarios) );