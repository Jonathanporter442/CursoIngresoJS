function mostrar()
{
//tomo la edad  
var edad;   
var estadoCivil;

edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

if (edad>=18 && estadoCivil=="Soltero")
{
    alert("No eres menor y sos soltero.");
}
	


}//FIN DE LA FUNCIÓN