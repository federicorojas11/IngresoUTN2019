/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
    var num2;    
    var result;


    num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    
result = num1 + num2;

alert ("El resultado de la suma es " + result);

}

function restar()
{ 
    var num1;
    var num2;    
    var result;


    num1 =  (document.getElementById("numeroUno").value);
    num2 =  (document.getElementById("numeroDos").value);
    
result = num1 - num2;

alert ("El resultado de la resta es " + result);
    
	
}

function multiplicar()
{ 

    var num1;
    var num2;    
    var result;


    num1 =  (document.getElementById("numeroUno").value);
    num2 =  (document.getElementById("numeroDos").value);
    
result = num1 * num2;

alert ("El resultado de la multiplicación es " + result);

	
}

function dividir()
{
    var num1;
    var num2;    
    var result;


    num1 =  (document.getElementById("numeroUno").value);
    num2 =  (document.getElementById("numeroDos").value);
    
result = num1 / num2;

alert ("El resultado de la división es " + result);
    


}

