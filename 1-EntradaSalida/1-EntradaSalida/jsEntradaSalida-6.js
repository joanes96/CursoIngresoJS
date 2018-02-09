/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno;
var numeroDos;
var resultado;

//se toman los numeros por ID
numeroUno= document.getElementById("numeroUno").value;
numeroDos= document.getElementById("numeroDos").value;

//se transforma el resultado
numeroUno =parseInt(1);
numeroDos =parseInt(2);

//se suman
resultado=numeroUno+numeroDos;

//se muestra
alert(resultado);

}

