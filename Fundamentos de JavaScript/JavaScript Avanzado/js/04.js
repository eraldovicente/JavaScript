// Window Binding

function obtenerAuto() {
     console.log(`Mi auto es color ${this.color}`);
}
const color = 'Negro'; // Undefined
window.color = 'Negro'; // Color negro

obtenerAuto();