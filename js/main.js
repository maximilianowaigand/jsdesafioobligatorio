class Producto {
    contructor (precio, cantidad) {
        this.precio = parseFloat(precio);
        this.cantidad = parseInt (cantidad);
    }

    calcularDescuento () {
        return (this.precio * this.cantidad) - (this.precio * 0.10 * this.cantidad);
        
    }
}


class Factura {
    constructor () {
        this.productos = [];
        this.total = 0
    }

    agregarProducto (precio, cantidad) {
        const producto = new Producto(precio, cantidad);
        this.productos.push(producto);;
    }

    calcularTotalconDescuento () {
        let total = 0;

        for (const producto of this.productos) {
            total = total + producto.calcularDescuento();
          }
        this.total = total;

        return total;
        
    }
}
console.log(Factura);


const factura = new Factura();

let precio;
let cantidad;

do {
    
    precio = (prompt("ingrese el precio del producto para realizar el descuento"));
    cantidad = prompt ("ingrese un cantidad");

    

    
    finalizar = prompt('ponga fin');

    factura.agregarProducto(precio, cantidad);    
    
    } while (finalizar != "fin");

alert ("el precio " + precio + " de la cantidad " + cantidad + " con el descuento es: " + factura.calcularTotalconDescuento());








