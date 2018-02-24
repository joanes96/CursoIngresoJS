function Mostrar()
{

var clave
var intentos=0;
clave=prompt("Ingrese clave")
while(clave!="utn750" && clave!=null &&intentos<2)
{

	clave=prompt("Clave Erronea")
	intentos++;
} 
if(intentos!=2)
alert("Bienvenidos al Sistema")
}//FIN DE LA FUNCIÓN
