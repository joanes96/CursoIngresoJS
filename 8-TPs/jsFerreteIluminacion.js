/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio () 
{
     var cantidad = document.getElementById("Cantidad").value;
     var precioDescuento; 
     var marca = document.getElementById("Marca").value;
     var lampara
     var precioFinalConDescuento
     
     lampara= parseInt(35);

     if(cantidad>5)
    {
        precioDescuento=lampara*cantidad*50/100;
          
    }  
     else
    { 
         if(cantidad==5 && marca == "ArgentinaLuz")
         {
                
          precioDescuento=lampara*cantidad*60/100; 
                           
         }
         else
         {
            if(cantidad==5&& marca!= "ArgentinaLuz")
            {
                precioDescuento=lampara*cantidad*70/100;
            }
            else
            {
                if(cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    precioDescuento=lampara*cantidad*75/100;
                }
                else
                {
                    if(marca!="ArgentinaLuz" && marca!="FelipeLamparas")
                    {
                        precioDescuento=lampara*cantidad*80/100;
                    }
                    else
                    {
                        if(cantidad==3 && marca=="ArgentinaLuz")
                        {
                            precioDescuento=lampara*cantidad*85/100;
                        }
                        else
                        {
                            if(marca=="FelipeLamparas")
                            {
                                precioDescuento=lampara*cantidad*90/100;
                            }
                            else
                            {
                                precioDescuento=lampara*cantidad*95/100;
                            }
                        }
                    }
                }
            }
         }
     }



document.getElementById("precioDescuento").value=precioDescuento;
}