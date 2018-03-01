//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 1-EntradaSalida");

	var triangulo = document.getElementById("lado").value;
	var perimetro

	triangulo= parseInt(triangulo);
	perimetro=triangulo*3;
	alert(perimetro);
}

