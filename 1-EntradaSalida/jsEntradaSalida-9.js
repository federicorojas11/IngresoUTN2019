/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()


{

var num1;
var res;

num1 = parseInt(document.getElementById("sueldo").value);

res = num1 * 10 / 100;

document.getElementById("resultado").value = res + num1 ;

alert (res);







	
}
