function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=0;
	var minimo=0;
	var numerodelusuario=0;
	var respuesta='si';

	while(respuesta!='no')
	{
		numerodelusuario=prompt("inserte un numero");
		numerodelusuario=parseInt(numerodelusuario);
	
		if(contador==0)
		
		{
		  maximo=numerodelusuario;
		  minimo=numerodelusuario;
		}
		  else if(maximo<numerodelusuario)
		  
		  {
			
			maximo=numerodelusuario;

		  }
		  else if(minimo>numerodelusuario)
		  {
			  minimo=numerodelusuario
		  }

		respuesta=prompt("De querer continuar ingresando numeros escriba si, caso contrario escriba no .");
		contador=contador +1;

		document.getElementById("maximo").value=maximo;
		document.getElementById("minimo").value=minimo;

	}




}//FIN DE LA FUNCIÓN