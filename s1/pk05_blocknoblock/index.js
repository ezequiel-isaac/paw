// Blocking Model
// programa que lee un archivo
// de forma blocqueante



// cargar un modulo  nativo  de node  que 
// permite trabajar con archivos 
var fs = require('fs');//file stream
//leyendo el archivo
var contenido =
                fs.readFileSync('\documento.txt','utf-8');
				console.log(contenido);
//haciendo otra
console.log('el programa termino..');				