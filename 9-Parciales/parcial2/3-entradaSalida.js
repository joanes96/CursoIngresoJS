//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");
	
	var largo=document.getElementById("largo").value;
	var ancho=document.getElementById("ancho").value;
	var preimetro
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	preimetro=largo*2*6+ancho*2*6;
	alert(preimetro);

}

