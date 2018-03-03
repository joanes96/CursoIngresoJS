//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=document.getElementById("largo").value;
	var ancho=document.getElementById("ancho").value;
	var perimetro;
	var alambre;
	largo=parseFloat(largo);
	ancho=parseFloat(ancho);
	perimetro=largo*2+ancho*2;
	alambre=perimetro*6;
	alert("Usted necesita "+alambre+" metros de alambre");

}

