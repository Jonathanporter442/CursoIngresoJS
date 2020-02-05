/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
 var nombre;
 // Se pide el archivo al html refiriendonos a el como "document" ponemos el punto y para pedir el dato en la caja de texto marcamos getElementByid y le marcamos la id del archivo a extraer("").value


 
 nombre = document.getElementById("elNombre").value;
// luego activamos una alerta para enviar el dato ingresado en la caja de texto
 alert(nombre)
}


