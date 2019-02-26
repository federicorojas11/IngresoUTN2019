function Mostrar()
{




	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num; 






	while (respuesta == "si")
	{

		num = parseInt(prompt("Ingrese el número"));
			while (isNaN(num)){
	    		num = parseInt ( prompt ("Eso no es un número. Por favor, ingrese un número"));
			}
    	
	acumulador = acumulador + num;
	contador++;
	respuesta = prompt("¿Desea seguir ingresando números?").toLowerCase();
	
	  		while (respuesta != "si" && respuesta != "no"){
				respuesta = prompt ("Esa no es una respuesta válida. ¿Desea seguir ingresando números?").toLowerCase();
			}

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;





}//FIN DE LA FUNCIÓN