function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var negativos=0;
	var cantidadNegativos=0;
	var positivos=0;
	var cantidadPositivos=0;
	var ceros;
	var numerospares;
	var promedio;
	var diferencia;
	var sumadeparesparalospositivos;
	var sumadeparesparalosnegativos;
	var numerosparesparalospositivos;
	var numerosparesparalosnegativos;
	while(respuesta!="no")
	{
		
	numero = prompt("elija un numero");
	numero = parseInt(numero);
	if(numero>0){
		
		positivos = positivos + numero;
	 
	   cantidadPositivos = cantidadPositivos + 1;
	 
	   numerosparesparalospositivos = positivos % 2 ;
	   
	   promedio= positivos / numero;
	   
	   if(numerosparesparalopositivos==0)
	  
	 
	  {
	 
		sumadeparesparalospositivos= sumadeparesparalospositivos+ 1;
	  
	
	  }
	   
	   
	}

	 else if (numero<0)
	 
	{
	 
	
		negativos = negativos + numero;
	 
	  cantidadNegativos = cantidadNegativos + 1;
	 
	  numerosparesparalosnegativos = negativos % 2;
	 
	  promedio = negativos / numero;
	  
	  
	    if(numerosparesparalosnegativos==0)
	  
	 
	  
		{
	 
		sumadeparesparalosnegativos= sumadeparesparalosnegativos + 1;
	  
	
	   }
	  
	  

	}
	 
	else if(numero==0)
	
	    {
		 ceros = ceros +1;
	
		}
	
	 
    diferencia = positivos - negativos; 
	 

	respuesta=prompt("si quiere continuar escriba si, si usted no quiere continuar entonces coloque no");
	}
	document.write("La suma de los positivos es : "+ positivos );
	document.write("La suma de los negativos es : "+ negativos );
	document.write("La cantidad de positivos es : "+ cantidadPositivos);
	document.write("La cantidad de negativos es : "+ cantidadNegativos );
	document.write("La cantidad de numeros pares es : "+ numerosparesparalospositivos );
	document.write("La cantidad de numeros pares es : "+ numerosparesparalosnegativos);
	document.write("El promedio es :"+ promedio );
	document.write("La diferencia de los numeros positivos y negativos es :"+ diferencia);
	
	




}//FIN DE LA FUNCIÓN