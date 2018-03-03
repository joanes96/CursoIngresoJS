//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10)
	 y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
	a) el promedio de las notas totales. 
	b) la nota más baja. 
	c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

	var nota;
	var sexo;
	var i;
	var acumuladorDeNotas=0;
	var promedio;
	var minimo;
	var contadorVarones=0;
	var flag=0;
	
	for(i=0;i<6;i++)
	{
		nota=prompt("Ingrese Nota");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("Reingrese Nota");
			nota=parseInt(nota);
		
		}
		sexo=prompt("Ingrese sexo");
		while(sexo!=f && sexo!=m )
		{
			sexo=prompt("Ingrese sexo nuevamente");
		}
		acumuladorDeNotas=acumuladorDeNotas+nota;
		if(flag==0 || nota<minimo)
		{
			minimo=nota;
			flag=1;
		}
		if(sexo=="m" && nota>=6)
		{
			contadorVarones++;
		}
	}
	promedio=acumuladorDeNotas/i;

	alert("El promedio de notas totales es:"+promedio+" ,la nota mas baja es: "+minimo+" y la cantidad de varones que su nota es mayor o igual a + es: "+contadorVarones+);
}

