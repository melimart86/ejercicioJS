var a = [1,4,16,3,0,21];
var b = [1,6,21,3,0,4]

function number (a,b){
 var contador = 0;

 for (var i = 0; i <a.length 0; i++) {
 	if(a[i]==b[i]) 
 		{
 			contador++;
 		}
 }
	return contador;
}

// esta funcion sirve para las coincidencias 
var a = [4,11,21,3,30];
var b = 4;

function estaIncluido (a,b){
	for (var i=0; i<a.length;i++){
		if (a[i]==b){
			return true;
		}
	}
	return false;
}
incluided (a,b); 