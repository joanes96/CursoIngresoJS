function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var positivos=0;
	var negativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var numero;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt();
			numero=parseInt(numero);
		}
		if(numero%2==0 && numero!=0)
		{
			contadorPares++;
		}
		if(numero<0)
		{
			negativos=negativos+numero;
			contadorNegativos++;
		}
		else
		{
			if (numero>0)
			{
				positivos=positivos+numero;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}
		

	respuesta=prompt("Desea continuar?")
	
	}
	promedioNegativos=negativos/contadorNegativos;
	promedioPositivos=positivos/contadorPositivos;
	diferencia=positivos-negativos
	document.write("<br>"+);
	
	




}//FIN DE LA FUNCIÓN