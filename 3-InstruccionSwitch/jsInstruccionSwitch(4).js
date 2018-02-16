function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
    switch(mesDelAño)
    {
        case "Enero" :
        case "Febrero" :
        case "Marzo" :
        case "Abril" :
            alert("Si tiene 31 dias")
            break;
        case "Mayo" :
        case "Junio" :
        case "Julio" :
        case "Agosto" :
        case "Septiembre" :
            alert("Si tiene 30 dias")
            break;
        default :
            alert("Si tiene 28 dias")
            break;
    }
	



}//FIN DE LA FUNCIÓN