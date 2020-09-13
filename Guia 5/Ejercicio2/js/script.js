
var radios = document.getElementsByClassName("radio");
var metros = 0;
var res;

for (let r of radios){
    r.onclick  = function() {
        metros = prompt('Introduzca la cantidad en metros: ', '0');
        calcular();
    };
}

window.onload = function() {
    metros = prompt('Introduzca la cantidad en metros: ', '0');
  
    calcular();
}

function calcular(){
    var opcion ; 
    if(radios[0].checked){
        res = metros * 3.281;
        opcion = radios[0].value;
    }
    if(radios[1].checked){
        res = metros * 39.37;
        opcion = radios[1].value;
    }
    if(radios[2].checked){
        res = metros * 1.094;
        opcion = radios[2].value;
    }
    document.getElementById("result").innerHTML = "Resultados: " +  metros + " Metros a " + opcion + " = " + res;
}
