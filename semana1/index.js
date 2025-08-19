const Alumno = require('./Alumno.js');

const alumno1 = new Alumno("Kamila", "Arias", 19, "programacion", ["Matemática", "Aplicaciones Hibridas"]);

console.log(" Datos del Alumno:", alumno1.obtenerDatos());
console.log(" Carrera:", alumno1.obtenerCarrera());
console.log(" Edad actual:", alumno1.retornarEdad());

alumno1.modificarEdad(20);
console.log(" Edad actualizada:", alumno1.retornarEdad());

alumno1.agregarMateria("programacion 1");

console.log(" Materias:");
alumno1.mostrarMaterias();
