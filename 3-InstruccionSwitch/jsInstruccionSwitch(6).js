function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);

//alert (laHora);
    switch(laHora)
{
case laHora=7:
case laHora=8:
case laHora=9:
case laHora=10:
case laHora=11:
{

alert("Es de mañana");
break;
}
case laHora=12:
case laHora=13:
case laHora=14:
case laHora=15:
case laHora=16:
case laHora=17:
case laHora=18:
case laHora=19:
{
alert("Es de tarde");
break;
}
case laHora=20:
case laHora=21:
case laHora=22:
case laHora=23:
case laHora=24:
{
alert("Es de noche");
break;
}
case laHora=01:
case laHora=0:
case laHora=1:
case laHora=2:
case laHora=3:
case laHora=4:
case laHora=5:
case laHora=6:
{
alert("Es de noche");
break;
}















}
}//FIN DE LA FUNCIÓN