//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	var numero=prompt("Ingrese 1er numero");
	var num=prompt("Ingrese 2do numero");
	var resultado
	num=parseInt(num)
	numero=parseInt(numero)
	if(numero==num)
	{
		resultado=numero*num;
	}
	else if (numero>num)
	{
		resultado=numero-num;
	}
	document.write(resultado);
}

