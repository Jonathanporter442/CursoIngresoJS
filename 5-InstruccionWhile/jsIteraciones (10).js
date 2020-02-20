function mostrar()
{

	
	//declarar contadores y variables 
	
	var respuesta ;
	var cantPositivos = 0 ;
	var cantNegativos = 0 ;
	var negativo = 0 ;
	var positivo = 0 ;
	var numero = 0 ;
	var prompositivo = 0 ;
	var promnegativo = 0 ;
	var pardeposi  ;
	var pardenega ;
	var resto = 0 ; 
	var cero = 0 ;
	var diferencia ;
	var Parestotales ;
	var contador = 0;

	
   do
	{
		
	numero = prompt("elija un numero") ;
	numero = parseInt(numero) ;
	while (isNaN(numero)){
		numero = prompt("Eso no es un numero. Por favor escriba otro.")
	}
	if (numero>0)
	{
  
		positivo = positivo + numero ;

		cantPositivos = cantPositivos + 1 ;

		resto = numero % 2 ;

		contador++;
	}
		 else if (resto==0)
		{
			pardeposi = pardeposi + 1 ;
		}

		if (numero<0)
		{
          negativo = negativo + numero ;
		 
		  cantNegativos = cantNegativos + 1 ;
		  
		  resto = numero % 2 ;
		
		  contador++;
		 
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


	

}while(respuesta=="si");


diferencia = positivo - negativo ;

prompositivo = positivo / cantPositivos ;

promnegativo = negativo / cantNegativos ;

Parestotales = positivo + negativo ;
		

document.write("La suma de los numeros positivos es : " + positivo+"</br>");
document.write("La suma de los numeros negativos es : " + negativo+"</br>");
document.write("La cantidad de numeros positivos es : " + cantPositivos+"</br>");
document.write("La cantidad de numeros negativos es : " + cantNegativos+"</br>");
document.write("La cantidad de ceros es : " + cero+"</br>");
document.write("El promedio de los numeros positivos es : " + prompositivo+"</br>");
document.write("El promedio de los numeros negativos es : " + promnegativo+"</br>");
document.write("La diferencia entre los numeros positivos y los negativos es : " + diferencia+"</br>");
document.write("La cantidad de numeros pares es : " + Parestotales+"</br>");

	
	
	




}//FIN DE LA FUNCIÓN