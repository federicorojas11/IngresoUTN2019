//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

/*7- realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”) 
de 100 alumnos, informar por alert:

a) el promedio de las notas totales.
b) la nota más baja y el sexo.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/


var nota;
var sexo; 
var prom;
var acumulador = 0;
var notabaja;
var sexoNotaBaja;
var contador = 0;
var flag = 0;
var cantidad = 3;


for (var i = 0 ; i < cantidad ; i++)
{
	nota = parseInt(prompt("ingrese una nota"));
	while (nota < 0 || nota > 10 || isNaN(nota))
	{
		nota = parseInt (prompt("ingrese una nota correctamente."));
	}
	acumulador = acumulador + nota;

sexo = prompt("Ingrese sexo: ").toLowerCase()
while (sexo != "f" && sexo != "m")
{
	sexo = prompt("Ingrese sexo correctamente: ").toLowerCase();
}




if ( sexo == "m" && nota >= 6 )
{
contador++	
}

if ( nota < notabaja || flag == 0)
{
	notabaja = nota;
	sexoNotaBaja = sexo;
	flag = 1;
}
}

prom = acumulador / 3;

alert ("a) el promedio: " + prom.toFixed(2) + "\nb) nota más baja y sexo " + notabaja + " " + sexoNotaBaja + "\nc) varones aprobados: " + contador)



}

