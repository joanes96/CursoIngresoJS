/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroDividendo
    var numeroDivisor
    var resultado

    numeroDividendo= document.getElementById("numeroDividendo").value;
    numeroDivisor= document.getElementById("numeroDivisor").value;

    numeroDividendo= parseInt(100);
    numeroDivisor= parseInt(10);

    resultado=numeroDividendo%numeroDivisor;

    alert(resultado);
}
