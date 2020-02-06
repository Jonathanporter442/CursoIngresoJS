function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.round(Math.random()*10);
	
	if (random>=9)
	{
		alert("El resultado de tu examen es un excelente :" +random );
	}
	 else if (random>=4 && random<=8)
	 {
		 alert("Aprobo el resultado de tu examen es " +random);
	 }
	 else if (random<=3)
	 {
		 alert("Desaprobo el resultado de tu examen es : " +random);
	 }

}//FIN DE LA FUNCIÓN