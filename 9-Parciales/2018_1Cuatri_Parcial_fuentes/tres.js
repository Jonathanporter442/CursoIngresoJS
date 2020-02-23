function mostrar()
{
var precio;
var descuento;
var calculo;
var preciFinal;
var resultado;

precio = parseInt(prompt("Ingrese el precio del producto"));

descuento = parseInt(prompt("Ingrese el descuento del producto"));

calculo = precio * descuento / 100;

precioFinal = precio - calculo;

document.getElementById("elPrecioFinal").value = precioFinal;




}
