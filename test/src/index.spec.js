const { isAbsolute, transformToAbsolutePath, isDirectory, readDirectory, isFile, mdFile, readFile } = require ('../../src/index.js');

const routeAbsolute = 'G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md';
const routeDirectory = 'G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\';
const routeText = 'G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\prueba2.txt';
const directoryFiles = [ 'prueba1.md', 'texto.txt' ];
const textRouteAbsolute = 'Mi nombre empieza con la letra \"M\" y mi apellido termina con la letra \"A\".';

describe('isAbsolute', () => {
  it('Devuelve false si la ruta no es absoluta', () => {
    expect(isAbsolute('prueba2.txt')).toEqual(false);
  });
  
  it('Devuelve true si la ruta es absoluta', () => {
    expect(isAbsolute('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md\\')).toEqual(true);
  });  
});

describe('transformToAbsolutePath', () => {
  it('Transforma una ruta en absoluta', () => {
    expect(transformToAbsolutePath('pruebas\\prueba1.md')).toEqual(routeAbsolute);
  });

  it('Te devuelve ruta absoluta', () => {
    expect(transformToAbsolutePath('G:\\MIS COSAS\\Cursos\\BootCampLaboratoria\\Lim-017\\LIM017-md-links\\pruebas\\prueba1.md')).toEqual(routeAbsolute);
  });
});

describe('isDirectory', () => {
  it('Devuelve true si un directorio', () => {
    expect(isDirectory(routeDirectory)).toEqual(true);
  });

  it('Devuelve false si no es un directorio', () => {
    expect(isDirectory(routeAbsolute)).toEqual(false);
  });
});

describe('readDirectory', () => {
  it('Lee un directorio', () => {
    expect(readDirectory(routeDirectory)).toEqual(directoryFiles);
  });
});

describe('isFile', () => {
  it('Devuelve true si un archivo', () => {
    expect(isFile(routeAbsolute)).toEqual(true);
  });

  it('Devuelve false si no es un archivo', () => {
    expect(isFile(routeDirectory)).toEqual(false);
  });
});

describe('mdFile', () => {
  it('Verifica si la extensión del archivo es .md', () => {
    expect(mdFile(routeAbsolute)).toEqual(true);
  });

  it('Devuelve falso si no es una extensión .md', () => {
    expect(mdFile(routeText)).toEqual(false);
  });
});

describe('readFile', () => {
  it('Lee un archivo', () => {
    expect(readFile(routeAbsolute)).toEqual(textRouteAbsolute);
  });
});

