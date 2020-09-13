
var boton = document.getElementById("btn");
var grados = 0;
var res;


boton.onclick  = function() {
    grados = prompt('Introduzca los grados celcius: ', '0');
        calcular();
    };


window.onload = function() {
    grados = prompt('Introduzca los grados celcius: ', '0');
  
    calcular();
}

function calcular(){
    res = (grados*(9/5))+32;
    document.getElementById("result").innerHTML = "Resultados: " +  grados + "° Celcius equivalen a " + res + "° Fahrenheit";
}
