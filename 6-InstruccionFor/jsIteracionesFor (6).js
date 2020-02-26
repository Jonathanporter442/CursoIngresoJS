function mostrar()
{
var i;
var numero;
var pares=0;
var contador;
    
numero=parseInt(prompt("ingrese un numero"))
 
for(i=0;i<=numero;i++){

while(isNaN(numero) || numero <1)
{
numero=parseInt(prompt("Dato invalido ingrese otro"));


}
    
for(i = 1;contador <= numero ; i++){
    if (contador % 2 == 0 ) {
alert(i)
pares++;
    }
}
alert("la cantidad de pares es : " + pares)









}




}//FIN DE LA FUNCIÓN