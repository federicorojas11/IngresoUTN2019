function Mostrar()
{




var repeticiones = parseInt (prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones))
{
    repeticiones = parseInt (prompt("ingrese el número de repeticiones correctamente"));
}
for ( var contador = repeticiones ; contador > 0 ; contador-- )
{

    document.write("Hola UTN FRA" + "<br>");
 

}





}//FIN DE LA FUNCIÓN