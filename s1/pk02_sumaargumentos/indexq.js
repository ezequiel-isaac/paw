// 



var numeros =process.argv[2];
numeros = numeros.split(',');
var suma = 0;
for(var index=0;index < numeros.length;index++){
	suma +=parseInt(numeros[index]);
}
console.log(suma);
