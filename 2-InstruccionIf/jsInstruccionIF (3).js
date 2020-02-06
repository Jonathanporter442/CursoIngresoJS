function mostrar()
{
//tomo la edad  
var edad;

 edad = document.getElementById("edad").value;

  if (edad>= 18)
  {
      alert("usted es mayor de edad " + edad + "años");
  }
 else
 {
     alert("usted es menor de edad " +edad +" años");
 }

}//FIN DE LA FUNCIÓN