/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{   
    var sueldo 
	var resultado 
	//se toma el importe por id
	sueldo= document.getElementById("sueldo").value;

	//se transforma en entero y se multiplica por el porcentaje (1.1)
	/*declarar parseInt(sueldo) permite que cualquier cosa
	 que ponga en el cuadro "sueldo" se aumente el 10% */
	sueldo=parseInt(sueldo)

	resultado= sueldo+sueldo*10/100;
	
	document.getElementById("resultado").value = resultado;


}
