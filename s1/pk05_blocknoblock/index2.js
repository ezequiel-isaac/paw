var fs= require('fs');

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