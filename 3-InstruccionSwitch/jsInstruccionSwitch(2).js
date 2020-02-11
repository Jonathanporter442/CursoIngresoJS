function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case mesDelAño="Enero":
    case mesDelAño="Febrero":
    case mesDelAño="Marzo":
    case mesDelAño="Abril":
    case mesDelAño="Mayo":
    case mesDelAño="Junio":
        {
            alert("Todavia no es invierno, lo que quiere decir que no eres feliz.");
            break;

        }
    
        case mesDelAño="Julio":
        case mesDelAño="Agosto":

{
    alert("ES INVIERNO YA ERES FELIZ");
    break;
}
case mesDelAño="Septiembre":
case mesDelAño="Octubre":
case mesDelAño="Noviembre":
case mesDelAño="Diciembre":
    {
        alert("Ya paso el frio ahora te toca re cagarte de calor");
        break;
    }




















}




}//FIN DE LA FUNCIÓN