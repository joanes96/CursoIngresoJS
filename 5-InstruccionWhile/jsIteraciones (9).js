function Mostrar()
{

	var contador=0;
	// declarar variables
	var numeroMax;
	var numeroMin;
	var numero
	var respuesta='si';

	while(respuesta!='no')
	{
		
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		if (contador==0)
		{
			numeroMax=numero;
			numeroMin=numero;
		}
		else
		{
			if(numero>numeroMax)
			{
			numeroMax=numero;
			}
			if (numero<numeroMin)
			{
			numeroMin=numero;
			}
		}
		contador++;

		respuesta=prompt("Quiere continuar?")
	
	}
document.getElementById("maximo").value=numeroMax;
document.getElementById("minimo").value=numeroMin;



}//FIN DE LA FUNCIÓN