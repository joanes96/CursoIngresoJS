/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{   
    var sueldo
    var resultado
    var aumento

    sueldo= document.getElementById("sueldo").value;
    aumento= document.getElementById("resultado").value;

    sueldo= parseInt(100);
    resultado= parseInt(1.1);

    aumento=sueldo*resultado;

    alert(aumento);

}
