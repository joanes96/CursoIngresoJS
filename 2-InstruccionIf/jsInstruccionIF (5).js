function Mostrar()
{
//tomo la edad  
     var edad
     edad=document.getElementById("edad").value;
     if(edad<=13 || edad>=18)
     {
         alert("no es adolescente");
     }
     else
     {
         alert("es adolescente");
     }

}//FIN DE LA FUNCIÓN