/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*{
 var marca;
 var precio=35;
 var precioDescuento;
 var cantidad;  
 var IIBB;	
 var precioFinal;
cantidad = parseInt(document.getElementById("Cantidad").value);
marca = document.getElementById("Marca").value;

if(cantidad>=1){

if (cantidad>=6)
{
precioDescuento =precio * 50 /100;
precio= precio - precioDescuento;
}
else if (cantidad == 5)
{
if (marca=="ArgentinaLuz")
{
    precioDescuento=precio * 40 / 100;
    precio = precio - precioDescuento;
}

else
{
    precioDescuento = (precio * 30) / 100;
    precio = precio - precioDescuento;

}
}
else if (cantidad == 4 && marca == "ArgentinaLuz" || "FelipeLamparas")
{
    precioDescuento = precio * 25/100;
    precio = precio - precioDescuento;
}
else{
    precioDescuento = precio * 20/100;
    precio = precio - precioDescuento;
}

 if (cantidad == 3)
{
    if (marca == "ArgentinaLuz")
    {
      precioDescuento = precio * 15/100;
        precio = precio -precioDescuento;
    }
}
else if (marca == "FelipeLamparas")
{
    precioDescuento =precio * 10/100;
    precio = precio - precioDescuento;
}

else{
    precioDescuento=precio * 5/100;
    precio = precio - precioDescuento;
}
document.getElementById("precioDescuento").value = precio;


if (precio>120)
{
IIBB = (precio *10)/100;
precio = (precio * 10)/100;
alert("Usted pago " +IIBB+ "de IIBB " );
}else{
    alert("El precio final es : " + precio);
}
}else{
    alert("El dato es invalido por favor vuelva a ingresarlo");
}
function CalcularPrecio () 
    var cantidad;
    var marca;
    var precio = 35;
    var porcDescuento;
    var descuento;
    var IIBB;
    var importeFinal;
    var precioConDescuento;


    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad >= 1) {

        switch (cantidad) {
            case 1:
            case 2:
                porcDescuento = 0;
                break;
            case 3:
                if (marca == "ArgentinaLuz") {
                    porcDescuento = 15;
                } else if (marca == "FelipeLamparas") {
                    porcDescuento = 10;
                } else {
                    porcDescuento = 5;
                }
                break;
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    porcDescuento = 25;
                }
                else {
                    porcDescuento = 20;
                }
                break;
            case 5:
                if (marca == "ArgentinaLuz") {
                    porcDescuento = 40;
                }
                else {
                    porcDescuento = 30;
                }
                break;
            default:
                porcDescuento = 50;
        }

        // calculo el descuento
        descuento = precio * porcDescuento / 100;
        // al precio unitario le resto el descuento
        precioConDescuento = precio - descuento;

        // muestro el precio unitario en la caja inferior
        document.getElementById("precioDescuento").value = precioConDescuento;

        // ahora que ya se el precio de cada lampara
        // calculo el total
        importeFinal = precioConDescuento * cantidad;

        if (importeFinal > 120) {
            IIBB = importeFinal * 10 / 100;
            importeFinal = importeFinal + IIBB;
            alert("El importe final es $ " + importeFinal + "\nUsted pago $ " + IIBB + " de ingresos brutos");

        } else {
            alert("El importe final es $ " + importeFinal);
        }

    } else {
        alert("No es una cantidad valida");
    }


}























}
