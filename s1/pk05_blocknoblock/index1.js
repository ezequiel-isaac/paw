//non blocking Model
//---------------------

//cargando la libreria

// var fs= require('fs');
// 
// //manejador
// var manejador = function(err,data){
// 	if(err){
// 		console.log("Error al leer archivo..");
// 		return;
// 	}
// 	console.log(data);
// };
// 
// //lectura no bloqueante o asincrona 
// fs.readFile("\documento.txt",'utf-8',manejador);
// //otra operacion
// console.log('\nTermino el programa...');

var fs= require('fs');

//manejador
// var manejador = function(err,data){
// 	if(err){
// 		console.log("Error al leer archivo..");
// 		return;
// 	}
// 	console.log(data);
// };

//lectura no bloqueante o asincrona 
fs.readFile("\documento.txt",'utf-8',function(err,data){
	if(err){
		console.log("Error al leer archivo..");
 		return;
}
console.log(data);
});
//otra operacion
console.log('\nTermino el programa...');