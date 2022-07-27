const productos = [
    {nombre: "teclado", precio: 1500},
    {nombre: "mouse", precio: 1000},
    {nombre: "cpu", precio: 3000},
    {nombre: "monitor", precio: 10000},
];

let carrito = []


 alert ("bienvenido a la tienda virtual");

 let selection = prompt("desea comprar algun producto si o no")

while(selection != "si" && selection != "no") {
    alert ("por favor ingrese si o no")
    selection = promp ("hola desea comprar algo si o no")
}

if (selection == "si") {

    const nombres = productos.map ((el) => el.nombre + " " + el.precio);

    alert ("nuestros productos son " + productos.length +" :\n" + nombres.join('\n'));

} else if (selection == "no") {
    alert ("gracias por venir, hasta pronto")
}


while ( selection != "no") {
    
    let producto = prompt ("agrega productos a tu carrito y ponga fin para terminar");
    let precio = 0 

    if (producto == "teclado" || producto == "mouse" || producto =="cpu" ||producto == "monitor"){
        switch (producto) {
            case "teclado":
                precio = 1500;
                break;
            case "mouse":
                precio = 1000;
                break;
            case "cpu":
                precio = 3000;
                break;
            case "monitor":
                precio = 10000;
                break;
            default:
                 break;
        }
    let unidades = parseInt(promp("cuantas unidades quiere llevar"));

    carrito.push({producto, cantidad, precio})
    } else {
        alert("no ingreso un producto de la lista o ponga fin para terminar")
    }
}

while (producto === "fin") {
    alert ("gracias por su compra.a continuacion le indicaremos sus productos")
    carrito.forEach((carritoFinal) => {

    })
}
