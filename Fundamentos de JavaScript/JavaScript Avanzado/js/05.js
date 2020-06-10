// JavaScript Event Loop

console.log('Yo me mostrare primero');

setTimeout(function() {
     console.log('Yo me mostrare segundo');
}, 0);


console.log('Yo me mostrare tercero');


setTimeout(function() {
     console.log('Yo Cuarto');
}, 0);

new Promise(function(res) {
     res('Yo soy un promise');
}).then(console.log)
console.log('Yo quinto');




