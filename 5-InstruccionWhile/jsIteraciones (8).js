function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero=0;

do{

	numero= parseInt(prompt("Ingrese un numero : "));

while(isNaN(numero)){
	numero = parseInt(prompt("Eso no es un numero. Ingrese otro"))
}
if(numero>=0){

	positivo = positivo + numero;
}
else{

	negativo = negativo * numero;

     contador++;
}
	 respuesta = prompt("quiere ingresar otro numero ?");
	
}while(respuesta=="si");

if (contador == 0 ){
	negativo = 0;
}






document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN