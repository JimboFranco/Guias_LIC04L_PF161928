
var sum = 0;


function init() {
    var venta = new Array();
    var precios, html = "",i=0;
    html += '<div class="container">';
    html += '<h2 class="text-center">Productos vendidos del dia</h2>';
    html += '<div class="d-flex justify-content-center">';
    html += '<table class="table table-hover">';
    html += '<thead class="thead-dark">';
    html += '<tr>';
    html += '<th scope="col">#</th>  <th scope="col">Precio</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    
    do{
        
        venta[i] = parseFloat(prompt("Ingrese el precio del Producto vendido", ""));
        html += '<tr>';
        html += '<td>Producto vendido!</td>';
        html += '<td> $' + venta[i].toFixed(2) + '</td>';
        html += '</tr>';
        i+=1;
        
    }while(confirm("Desea agregar otro Producto?")==true);
    
    html += '</tbody>';
    html += '</table>';
    html += '</div>';

    html += '<h4 class="mt-5">El total de venta del dia es: $'+ suma(venta) +'</h4>';
    html += '</div>';

    document.write(html);
}


function suma(n) {
    for(i=0; i<n.length;i++){
        sum += n[i];
    }
    return sum.toFixed(2);
}



window.onload = init();

