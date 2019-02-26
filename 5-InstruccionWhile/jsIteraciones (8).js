function Mostrar()
{




	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag = 0;
	var respuesta='si';


while(respuesta == "si")
	
	{
	numero = parseInt(prompt("Ingrese un número:"));
	
		while(isNaN(numero))
		{
		numero= parseInt(prompt("Eso no es un número. Ingrese un número válido."))
		}


	if(numero >= 0)
	{
	positivo += numero;
	}

	else
	{
	negativo *= numero;
	flag = 1;
	}

respuesta = prompt ("¿Desea seguir ingresando nùmeros?").toLowerCase();

while (respuesta != "si" && respuesta != "no")
	{
	respuesta = prompt ("Esa no es una respuesta válida. ¿Desea seguir ingresando nùmeros?").toLowerCase();
	}

	}

	if (flag == 1)
	{
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;









}//FIN DE LA FUNCIÓN