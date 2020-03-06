function mostrar()
{
var i;
var numero;
var sexo;
var contador=0;
var sexmin;
var minimo;
var promedio;
var flag=0;

    for(i=1;i<=5;i++)
    {
        numero=parseInt(prompt("Escriba la nota entre el 0 y el 10"));
        while(isNaN(numero)||numero<0 || numero>10)
        {
            numero=parseInt(prompt("dato invalido vuelva a ingresarlo"));
        }

        sexo=prompt("ingrese el sexo utilizando f o m ");
        while(sexo!="f" && sexo!="m" && !isNaN(sexo))
        {
            sexo=prompt("dato invalido vuelva a ingresarlo");
        }
        if(minimo<numero || flag==0)
            {
                minimo=numero;
                sexmin=sexo;
                flag=1;
            }

            if(sexo=="m" && numero>=6)
            {
                contador++;

            }


    
    }
    
      promedio=numero/5

    alert("El promedio de las notas es : " +promedio);
    alert("La nota mas baja es : " +minimo+ " y el sexo del alumno/a es : " +sexmin);
    alert("la cantidad de varones que su nota es mayor o igual a 6 es : " +contador);
















}


































