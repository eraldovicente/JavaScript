// const enlaces = document.querySelectorAll('#principal .enlace');
// enlaces[1].style.background = 'red';
// enlaces[1].textContent = 'nuevo enlace';

const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(function(impares) {
     impares.style.backgroundColor ='red';
     impares.style.color = 'white';
});

console.log(enlaces);