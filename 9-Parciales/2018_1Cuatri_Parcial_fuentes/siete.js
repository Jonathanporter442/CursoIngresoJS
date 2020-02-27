function mostrar()
{

  var nota;
  var numero;
  var sexo;
  var contador;
  var sexominimo;
  var minimo;

  for(var i=0;i<=5;i++)
{
  numero=parseInt(prompt("Ingrese un numero"));
  while(isNaN(numero || numero<0 || numero >10))
  {
    numero=parseInt(prompt("Numero invalido,reingreselo"));
  }

  sexo=prompt("Ingrese el sexo").toLowerCase();
  while(sexo !="f" && sexo != "m")
  {
    sexo=prompt("reingrese el sexo usando solo f o m ").toLowerCase();
  }

if (i==0 )
{
minimo=numero;
sexominimo=sexo;
}
if(minimo>numero)
{
  minimo=numero;
  sexominimo=sexo;
}
if(sexo=="m" && numero>=6)
{
  contador++;
}
nota=(contador+numero)/5;

alert("El promedio de las notas es : " +nota);
alert("La nota mas baja es : " +minim+ " y el sexo es : " +sexominimo);
alert("La cantidad de varones que su nota es mayor o igual a 6 es :" +contador);


























}



































}
