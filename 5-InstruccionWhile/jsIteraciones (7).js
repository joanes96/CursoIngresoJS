function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero
	while(respuesta== "si")
	{
		
		contador++;
		numero=prompt();
		numero=parseInt(numero);
				while(isNaN(numero))
		{
			numero=prompt();
			numero=parseInt(numero);
		}

		acumulador=acumulador+numero;
		acumulador+=numero;
		respuesta=prompt("Quiere continuar?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN