function mostrar()
{

	
	//declarar contadores y variables 
	
	var respuesta="si" ;
	var cantPositivos = 0 ;
	var cantNegativos = 0 ;
	var negativo = 0 ;
	var positivo = 0 ;
	var numero = 0 ;
	var prompositivo = 0 ;
	var promnegativo = 0 ;
	var pardeposi = 0 ;
	var pardenega = 0 ;
	var resto = 0 ; 
	var cero = 0 ;
	var diferencia ;
	var Parestotales ;

	
	while(respuesta!="no")
	{
		
	numero = prompt("elija un numero") ;
	numero = parseInt(numero) ;
	
	if (numero>0)
	{
  
		positivo = positivo + numero ;

		cantPositivos = cantPositivos + 1 ;

		resto = numero % 2 ;

		if (resto==0)
		{
			pardeposi = pardeposi + 1 ;
		}

		else if (numero<0)
		{
          negativo = negativo + numero ;
		 
		  cantNegativos = cantNegativos + 1 ;
		  
		  resto = numero % 2 ;

		  if (resto==0)
		  {
			  pardenega = pardenega + 1 ;
		  }
		}

		else
		{
			cero = cero + 1 ;
		}

	 respuesta = prompt("Si ya no quiere continuar ingresando numero entonces escriba no en caso contrario escriba si");


	}

}


diferencia = positivo - negativo ;

prompositivo = positivo / cantPositivos ;

promnegativo = negativo / cantNegativos ;

Parestotales = positivo + negativo ;
		

document.write("La suma de los numeros positivos es : " + positivo);
document.write("La suma de los numeros negativos es : " + negativo);
document.write("La cantidad de numeros positivos es : " + cantPositivos);
document.write("La cantidad de numeros negativos es : " + cantNegativos);
document.write("La cantidad de ceros es :" + ceros);
document.write("El promedio de los numeros positivos es : " + prompositivo);
document.write("El promedio de los numeros negativos es : " + promnegativo);
document.write("La diferencia entre los numeros positivos y los negativos es : " + diferencia);
document.write("La cantidad de numeros pares es : " + Parestotales);

	
	
	




}//FIN DE LA FUNCIÓN