function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if (edad<=12)
{
    alert("Usted es un niño");
} 
else if (edad>=13 && edad<=17 )
 {
     alert("Usted es un adolescente");
    
 }
 else if (edad>=18)
 {
     alert("Usted es un adulto");
 }



}//FIN DE LA FUNCIÓN