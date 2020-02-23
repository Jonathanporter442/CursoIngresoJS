function mostrar()
{
    var numero1;
    var numero2;
    var resta;
    var suma;
    var resultado;

    numero1 = parseInt(prompt("ingrese un numero"));
    numero2 = parseInt(prompt("ingrese otro numero por favor"));

    if (numero1==numero2 && numero2==numero1)
    {
        alert("Los numero ingresados son iguales y son : " +numero1+ " y " +numero2);
    }
    
    else if (numero1>numero2)
    {
      resta = numero1 - numero2;
      alert("La resta da :" +resta);
    }
    
    else if (numero1<numero2)
    {
        suma= numero1 + numero2;
        alert("La suma es : " +suma );

       
    }
 if(suma=>10)
        {
            alert("La suma da :" +suma+ " ¡¡ y el resultado supera a 10!!");
        }
   



}
