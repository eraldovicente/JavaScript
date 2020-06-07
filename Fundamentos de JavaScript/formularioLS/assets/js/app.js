// Variables
const listaTweets = document.querySelector('#lista-tweets');


// Event Listeners 

eventListeners();

function eventListeners() {
     // Cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageListo);
}


// Funciones 

// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();
     // console.log('Formulario enviado!');
     // leer el valor del textarea
     const tweet = document.querySelector('#tweet').value;
     
     // Crear boton de eliminar
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X';


     // Crear elemento y añadirle el contenidoa a la lista
     const li = document.createElement('li');
     li.innerText = tweet;
     // anãde el boton de borrar al tweet
     li.appendChild(botonBorrar);
     // añade el tweet a la lista
     listaTweets.appendChild(li);
     // Añadir a Local Storage
     agregarTweetLocalStorage(tweet);
}
// eliminar el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();
     if (e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          borrarTweetLocalStorage(e.target.parentElement.innerText);
     } 
     // console.log('Diste click en la lista')
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
     let tweets;

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet) {
          // Crear boton de eliminar
          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-tweet';
          botonBorrar.innerText = 'X';


          // Crear elemento y añadirle el contenidoa a la lista
          const li = document.createElement('li');
          li.innerText = tweet;
          // anãde el boton de borrar al tweet
          li.appendChild(botonBorrar);
          // añade el tweet a la lista
          listaTweets.appendChild(li);
     });
}
// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // Añadir el nuevo tweet
     tweets.push(tweet);
     // Convertir de string a arreglo para local storage
     localStorage.setItem('tweets', JSON.stringify(tweets) );
     // Agregar a local storage
     // localStorage.setItem('tweets', tweet);
}

// Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerTweetsLocalStorage() {
     let tweets;
     // Revisando los valores del local storage
     if (localStorage.getItem('tweets') === null) {
          tweets = [];
     } else {
          tweets = JSON.parse(localStorage.getItem('tweets') );
     }
     return tweets;
}

// Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet) {

     let tweets, tweetBorrar;
     // Elimina la X del tweet;
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet, index) {
          if (tweetBorrar === tweet) {
               tweets.splice(index, 1);
          }
     });
     // console.log(tweets); 
     localStorage.setItem('tweets', JSON.stringify(tweets));
}