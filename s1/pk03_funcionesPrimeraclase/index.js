//funciones como 
//primera clase 
var funcionSaludar =function(nombre){
	console.log("hola %s",nombre);
};

var funcionDespide =function(nombre){
	console.log("adios %s",nombre);
};



//MANEJADORES - hendlers (manejador)  - Delegados

var mensaje =function(nombre, hendler){
	hendler(nombre);
}

//usando la funcion mensaje 
mensaje("ezequiel", funcionSaludar);