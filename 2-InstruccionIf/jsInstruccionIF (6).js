function Mostrar()
{
//tomo la edad  
    var edad
    edad=document.getElementById("edad").value;
    if(edad>18)
    {
        alert("adulto");
    }
    else
    {
        if(edad<13)
        {
            alert("niño");
        }
        else
        {
            alert("adolescente");
        }
    }


}//FIN DE LA FUNCIÓN