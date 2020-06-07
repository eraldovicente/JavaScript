const alumnos = {
     // todos los alumnos
     listaAlumnos: [],

     // obtener un alumno
     get: function(id) {
          console.log(id);
          return this.listaAlumnos[id];
     },

     // crear un alumno
     crear: function(datos) {
          console.log(datos);
          this.listaAlumnos.push(datos);
   
     },

     // listar todos los alumnos
     listado: function() {
          return this.listaAlumnos;
     }
}

const infoAlumno = {
     nombre: 'Eraldo',
     edad: 100
}
const infoAlumno2 = {
     nombre: 'Pablo',
     edad: 102
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado  = alumnos.listado();

console.log(listado);

const alumno = alumnos.get(0);

console.log(alumno);