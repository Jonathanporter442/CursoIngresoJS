function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero=0;

	while (respuesta!="no")
	{
	numero = prompt("elija un numero");
	numero = parseInt(numero);
	if(numero>0){
		positivo = positivo + numero;
	}
	 else if (numero<0)
	 
	{
      negativo = negativo * numero;
	 }
	respuesta=prompt("si quiere continuar escriba si, si usted no quiere continuar entonces coloque no");
	contador=contador+1
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN