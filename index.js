/*module.exports = () => {
  // ...
};*/

const fs = require('node:fs');

/*fs.writeFile('./texto.txt', 'prueba 1', function(error){
  if(error){
    console.log(error);
  }
});*/

/*fs.readFile('./texto.txt', (error, data)=>{
  if(error){
    console.log(error)
  }
  console.log(data.toString());
})*/

fs.readdir('./', (error, archivos)=>{
  archivos.forEach(archivos =>{
    console.log(archivos);
  });
});
