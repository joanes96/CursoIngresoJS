//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	var numeroUno=prompt("Ingrese 1er numero");
	var numeroDos=prompt("Ingrese 2do numero");
	var resultado
	numeroDos=parseInt(numeroDos)
	numeroUno=parseInt(numeroUno)
	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else if (numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
	}
	document.write(resultado);
}

