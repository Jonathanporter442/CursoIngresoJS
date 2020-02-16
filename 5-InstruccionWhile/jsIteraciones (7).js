function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var suma;
while (respuesta!="no")
{
suma = prompt("ingrese un numero");
respuesta = prompt("ingrese otro numero");

contador = parseInt(contador);
acumulador = parseInt(acumulador);
suma = parseInt(suma);

contador = contador + 1;
acumulador = suma + acumulador;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN