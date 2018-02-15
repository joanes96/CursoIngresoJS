function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
		var nota
		nota=parseInt((Math.random()*(11-1))+0)
		alert(nota);
		if(nota>=9)
		{
			alert("excelente");
		}
		else if (nota>=6)
		{
			alert("muy bien");
		}
		else if (nota>=4)
		{
			alert("bien");
		}
		else if (nota>=2)
		{
			alert("mal");
		}
		else if (nota>=0)
		{
			alert("desastrozo");
		}






}//FIN DE LA FUNCIÓN