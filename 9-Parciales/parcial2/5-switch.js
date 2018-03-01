//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");
	var meses=prompt("Ingrese algun mes del año")
	 switch(meses)
	 {
	 	case "enero":
	 	case "febrero":
	 		alert("VERANITO!!!!")
	 		break;
	 	default :
	 		alert("Extraño Enero y Febrero!!!!")
	 		break;

	 }
}

