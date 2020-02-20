function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=0;
	var minimo=0;
	var numero=0;
	var respuesta='si';

	/*do{
		numero=prompt("inserte un numero");
		numero=parseInt(numero);
	
		if(contador==0)
		
		{
		  maximo=numero;
		  minimo=numero;
		}
		  else if(maximo<numero)
		  
		  {
			maximo=numero;

		  }
		  else if(minimo>numero)
		  {
			  minimo=numero;
			}
			
	  contador=contador +1;
		
		respuesta=prompt("De querer continuar ingresando numeros escriba si, caso contrario escriba no .");
		
	  }while(respuesta=='si')

		

		document.getElementById("maximo").value=maximo;
		document.getElementById("minimo").value=minimo;

	}*/

}//FIN DE LA FUNCIÓN

  var maximo=0;
	var minimo=0;
	var numero=0;
	var respuesta='si';
	var flag=0;
do{

numero=prompt("inserte un numero");
numero=parseInt(numero);
	
	while (isNaN(numero))
	{
		prompt("Este no es un numero. Por favor ingrese otro")
   
	}
if (flag == 0 ||numero > maximo){
	maximo = numero;
}

if (flag == 0 || numero<minimo)
{
  minimo = numero;
  flag = 1;
}
respuesta = prompt("¿Quiere ingresar otro numero?");

}while(respuesta=="si")


document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;