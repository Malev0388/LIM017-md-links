const fs = require('node:fs'); //Módulos traídos de node js
const path = require('node:path');

//Verificar si la ruta es absoluta
const isAbsolute = (route) => path.isAbsolute(route);
//console.log('¿La ruta es absoluta?', isAbsolute('prueba2.txt'));

//Transformar la ruta en absoluta
const transformToAbsolutePath = (route) => path.isAbsolute(route) ? route : path.resolve(route);
//console.log('Transformar la ruta en absoluta:', transformToAbsolutePath('pruebas\\prueba1.md'));

//Verificar si es un directorio
const isDirectory = (route) => fs.lstatSync(route).isDirectory();
//console.log('¿Es un directorio?', isDirectory('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\'));

//Leer el directorio
const readDirectory = (route) => fs.readdirSync(route);
//console.log('Leer el directorio', readDirectory('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\')); 

//Verificar si es un archivo
const isFile = (route) => fs.statSync(route).isFile();
//console.log('¿Es un archivo?', isFile('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md'));

//Verificar si la extensión del archivo es .md
const mdFile = (route) => path.extname(route) === '.md';
//console.log('¿Es un archivo con extensión .md?', mdFile('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md'));

//Leer contenido del archivo .md
const readFile = (route) => fs.readFileSync(route, 'utf-8');
//console.log('El contendido del archivo dice:', readFile('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md'));

//Obtener archivos .md en un array
/*const getFilesFromMd = (route) => {
  let arrMdFile = [];
  if(mdFile(route))
}*/

//Verificar si existen links

module.exports = {
  isAbsolute,
  transformToAbsolutePath,
  isDirectory,
  readDirectory,
  isFile,
  mdFile,
  readFile,
};