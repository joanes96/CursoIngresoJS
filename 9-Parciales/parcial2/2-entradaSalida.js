//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* 2-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"  lea un importe  de un producto 
por <strong>prompt</strong> y muestre el importe final sumándole el IVA (21%) */
					
function Mostrar()
{
	
	var importe;
	var importeFinal;
	importe=prompt("Ingrese el importe del producto");
	importe=parseFloat(importe);
	importeFinal=importe*1.21;
	document.getElementById("importe").value=importeFinal;

	

