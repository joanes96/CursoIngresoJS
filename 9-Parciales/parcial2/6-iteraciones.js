//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador=0;
	var maximo;
	var minimo;
	var diaMaximo;
	var diaMinimo;
	var bandera=0;

	while(contador<7)
	{
		
		importe=prompt("Ingrese Importe");
		importe=parseFloat(importe);

		while(importe<=0)
		{
			importe=prompt("Ingrese Importe");
			importe=parseFloat(importe);
		}

		contador++;

		if(bandera==0)
		{
			bandera=1;
			diaMaximo=contador;
			diaMinimo=contador;
			maximo=importe;
			minimo=importe;
		}
		else
		{
			if(importe>maximo)
			{
				maximo=importe;
				diaMaximo=contador;
			}
			else if (importe<minimo)
			{
				minimo=importe;
				diaMinimo=contador;
			}
		}
		
	}

	console.log("El maximo importe fue "+maximo);
	console.log("El minimo importe fue "+minimo);
	console.log(diaMaximo);
	console.log(diaMinimo);

}

