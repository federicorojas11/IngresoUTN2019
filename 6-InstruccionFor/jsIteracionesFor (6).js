function Mostrar()
{



var contPares = 0;
var num;



num = parseInt(prompt("Ingrese un número"));

while (isNaN(num))
{
    num = parseInt(prompt("Ingrese un número correctamente"));
}



for(var x = 0 ; num > x ; x++)

{if ( num % 2 == 0)
 {
 document.write("numero" + contPares + "<br>");
 contPares++
 }
}
 
 document.write("cantidad de pares: " + contPares);











}//FIN DE LA FUNCIÓN