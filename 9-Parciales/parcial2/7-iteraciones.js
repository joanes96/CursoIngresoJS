//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var seguir;
	var cantidadDePares=0;
	var acumulador=0;
	var promedio;
	var minimo
	var maximo

	while(seguir==true)
	{
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		while(numero<=0 || isNaN(numero))
		{
			numero=prompt("Ingrese Numero");
			numero=parseInt(numero);
		}
		if(numero%2==0)
		{
			cantidadDePares++;

		}

		acumulador=acumulador+numero;

		if(contador==0 || numero<minimo)
		{
			minimo=numero;
		}
		if(contador==0 || numero<maximo)
		{
			maximo=numero;
		}

		contador++;
		seguir=confirm("desea ingresar otros?");
	}
	promedio=acumulador/contador;
}

