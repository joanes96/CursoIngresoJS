//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 1-EntradaSalida");

	var base = document.getElementById("lado").value;
	var perimetro

	base= parseFloat(base);
	perimetro=base*3;
	alert(perimetro);
}

