
function calcularDescuento (precio) {
    return precio - (precio * 0.10);
    
}

do {
    let producto = prompt ("ingrese un producto y ponga fin para terminar");
    alert ("ahora indique su precio"); 
    precioProducto = parseFloat (prompt("ingrese el precio del producto para realizar el descuento"));
    if (precioProducto) {
        alert ( "el precio de del producto " + producto + " con descuento es: " + calcularDescuento(precioProducto));
    }
    
}while (precioProducto != "fin");








