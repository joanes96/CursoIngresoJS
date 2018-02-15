function Mostrar()
{

    var uno
    var dos
    var resultado
    uno= prompt("ingrese numero");
    dos= prompt("ingrese numero");
    uno=parseInt(uno);
    dos=parseInt(dos);
    if(uno==dos)
    {
        resultado=uno*dos
         
    }
    else
    {
        if(uno>dos)
        {
            resultado=uno-dos
             
        }
        else
        {
            resultado=uno+dos
                        
        }
    }

    document.write(resultado);




}
