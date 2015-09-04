// function saludar(){
// 	var mensaje ="hola roa..";
// 	console.log(mensaje);
// }
// console.log(mensaje);


function retornaFuncionsaludo(){
	var mensaje="hola erick...";
	return function(){
		console.log(mensaje);
	}
}

var saludar = retornaFuncionsaludo();
saludar();