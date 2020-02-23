function mostrar()
{

var hora;

hora = (parseInt(document.getElementById("laHora").value));
 
    if(isNaN(hora))
    {
     alert("Eso no es un numero ingrese otro");
    }
        switch (hora)

   {

        case hora=6:
        case hora=7:
        case hora=8:
        case hora=9:
        case hora=10:
        case hora=11:
        {
            alert("Son las : " +hora+ " y es de mañana .");
            break;
        }
        case hora=12:
        case hora=13:
        case hora=14:
        case hora=15:
        case hora=16:
        case hora=17:
        case hora=18:
        case hora=19:
            {
               alert("Son las : " +hora+ " y es de tarde.");
               break;
            }
        case hora=20:
        case hora=21:
        case hora=22:
        case hora=23:
        case hora=24:
            
            {
                alert("Es de noche y es hora de dormir. Son las : " +hora);
                break;
            }
       case hora=1:
       case hora=2:
       case hora=3:
       case hora=4:
       case hora=5:
            {
                alert("Es de noche y deberias estar durmiendo, porque son las  " +hora );   
                break;

            }
    
    
    
    
    }

    







}