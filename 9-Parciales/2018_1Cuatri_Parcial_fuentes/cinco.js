function mostrar()
{
    var planeta;
    
    planeta = prompt("ingrese un planeta del sistema solar");

    switch (planeta)
    {
     case planeta="sol" :
    
        {   
             alert("Aca hace calor");
            break;
        }
     case planeta="mercurio":
     case planeta="venus":
         {
             alert("aca hace menos calor");
             break;
         }
    case planeta="tierra":
        {
            alert("Aca vivimos nosotros");
            break;
        }
    case planeta="marte":
    case planeta="jupiter":
    case planeta="saturno":
    case planeta="urano":
    case planeta="neptuno":
        {
            alert("aca hace mas frio y estas lejos de casa");
            break;
        }










    }
    }
