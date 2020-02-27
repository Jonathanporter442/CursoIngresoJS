function mostrar()
{
var marca;
var peso;
var countpeso;
var temperatura;
var tempPares;
var cantTemp0;
var promedioP;
var marcaMax;
var marcaMin;
var pesoMax;
var pesoMin;
var respuesta= "si"
var resto;
var contador=0;
var flag=0;

do{
marca=prompt("Escriba la marca");

peso=parseInt(prompt("escriba el peso del producto entre 1 y 100 kg"));
while(peso<1 || peso >100 || isNaN(peso))
{
    peso=parseInt(prompt("Peso invalido.vuelva a ingresarlo"));

}
temperatura=parseInt(prompt("Escriba una temperatura entre el -30 y 30ªc"));
while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
{
    temperatura=parseInt(prompt("temperatura invalida. escrib una temperatura valida entre el -30 y el 30"));
}

if (temperatura%2==0)
{
    tempPares++;
}
if(temperatura<0)
{
cantTemp0++;
}
if(peso >pesoMax || flag==0)
{
    
    pesoMax = peso;

    marcaMax=marca;
}
if (peso<pesoMin || flag ==0)
{
pesoMin=peso;
marcaMin=marca;
flag=1;
}
countpeso=countpeso+peso;
contador++;



respuesta==prompt("Si ya no quiere continuar escribiendo escriba no, caso contrario escriba si.").toLowerCase()
}while(respuesta=="si")


promedioP=countpeso/contador;

document.write("La cantidad de temperaturas pares es : " +tempPares+ "</br>");
document.write("La marca mas pesada es: " +marcaMax+ "El peso maximo es : " +pesoMax+ "</br>");
document.write("La cantidad de productos que su temperatura es menos a 0 son :" +cantTemp0+ "</br>");
document.write("El promedio de los pesos es : " +promedioP+ "</br>");
document.write("El peso minimo es : " +pesoMin+ "</br>");














}
