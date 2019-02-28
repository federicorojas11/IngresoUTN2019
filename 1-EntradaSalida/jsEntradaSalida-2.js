/*8- realizar el algoritmo que permita ingresar números positivos
(validar que sea positivo) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:

a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

function Mostrar()
{


var num;
var confirm1;
var contador = 0;
var contadorPares = 0;
var acumulador = 0;
var promedio;
var numMin;
var numMax;
var flag = 0;

    
do 
{

num = parseInt(prompt("Ingrese un número positivo: "));
while ( num <= 0 )
{
num = parseInt(prompt("Error. Ingrese un número positivo: "));
}

if (num%2 == 0)
{
    contadorPares++;
}

acumulador = acumulador + num;

if (num > numMax || flag == 0) 
{
numMax = num;
}

if (num < numMin || flag == 0) 
{
numMin = num;
flag =1;
}

contador++;
confirm1 = confirm("Desea seguir ingresando números?");
}while (confirm1);


promedio = acumulador / contador;



	document.write ("Cantidad de pares: "+contadorPares+ "<br>"+"Promedio de números ingresados: "+promedio+ "<br>"+"Suma de todos los números: "+acumulador+"<br>"+"Numero máximo: "+numMax+ "<br>" + "Numero mínimo: "+numMin);



}

