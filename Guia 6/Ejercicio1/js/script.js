
var impar = "", par = "", sum = 0, mayor=0,menor=0;


function init() {
    var numeros = new Array();
    var num, html = "";

    num = (prompt("Ingrese un numero entero", ""));
    numeros = num.split("");

    parImpar(numeros);
    mayorMenor(numeros);

    //Datos HTML
    html += '<div class="container">';
    html += '<h2 class="text-center">Datos del numero ingresado</h2>';
    html += '<div class="d-flex justify-content-center">';
    html += '<table class="table table-hover">';
    html += '<thead class="thead-dark">';
    html += '<tr>';
    html += '<th scope="col">Número Ingresado</th>  <th scope="col">Número de cifras</th><th scope="col">Cifras impares</th><th scope="col">Cifras pares</th><th scope="col">Suma de impares</th>';
    html += '<th scope="col">Suma de pares</th>  <th scope="col">Suma de cifras</th><th scope="col">Cifra mayor</th><th scope="col">Cifra menor</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    html += '<tr>';
    html += '<td>' + num + '</td>';
    html += '<td>' + numeros.length + '</td>';
    html += '<td>' + impar.split("") + '</td>';
    html += '<td>' + par.split("") + '</td>';
    html += '<td>' + suma(impar) + '</td>';
    html += '<td>' + suma(par) + '</td>';
    html += '<td>' + suma(num) + '</td>';
    html += '<td>' + mayor + '</td>';
    html += '<td>' + menor + '</td>';
    html += '</tr>';
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</div>';

    document.write(html);
}

// Funciones
function parImpar(n) {

    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0) {
            impar += n[i];
        } else {
            par += n[i];
        }
    }
}

function suma(dig) {
    sum = 0;
    dig.split("").forEach(dig => sum += parseInt(dig))
    return sum;
}

function mayorMenor(n) {
    mayor = Math.max.apply(null, n);
    menor = Math.min.apply(null, n);
}



window.onload = init();

