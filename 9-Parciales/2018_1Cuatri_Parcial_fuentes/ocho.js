function mostrar()
{
var letras;
var letraMax;
var letraMin;
var numero;
var cantidadPares=0;
var cantidadInpares=0;
var cantidadCeros=0;
var maximo;
var minimo;
var suma;
var restopar;
var restoinpar;
var promedio;
var acumuladorNegativos=0;
var acumuladorPositivos=0;
var respuesta="si";
var contador=0;
var flag=0;
do{

    letras=prompt("ingrese una letra");
while(!((letras>="A" && letras<="Z") || (letras>="a" && letras<="z")))
{
    letras=prompt("eso no es una letra, reingrese el dato");
}
numero=parseInt(prompt("ingrese un numero(-100 y 100)"));

while(numero<-100 || numero >100 || isNaN(numero))
{
    numero=parseInt(prompt("Dato invalido, reingrese un numero valido entre el -100 y el 100"));
}
if (numero %2==0){
    cantidadPares++;
}
else {

    cantidadInpares++;
}

if(numero >0){
contador++;
acumuladorPositivos=acumuladorPositivos+numero;

}
else if(numero<0)
{
    acumuladorNegativos=acumuladorNegativos+numero;
}
else{
cantidadCeros++;
}

if(numero >maximo || flag==0)
{
    maximo = numero;
    letraMax=letras;
}
if (numero<minimo || flag ==0)
{
minimo=numero;
letraMin=letras;
flag=1;
}

respuesta=prompt("Si ya no quiere ingresar datos ingrese no, caso contrario escriba si").toLowerCase();

}while(respuesta=="si");


promedio=acumuladorPositivos/contador;


document.write("La cantidad de numeros pares es : " +cantidadPares+"</br>" );
document.write("La cantidad de numeros impares es : " +cantidadInpares+"</br>");
document.write("La cantidad de ceros es : " +cantidadCeros+ "</br>");
document.write("El promedio de los numeros positivos es : " +promedio+ "</br>");
document.write("la suma de los numeros negativos es :"+suma+"</br>");
document.write("Numero maximo : " +maximo+ "letra : " +letraMax+"</br>");
document.write("Numero maximo : " +minimo+ "letra : " +letraMin+"</br>");
















}
