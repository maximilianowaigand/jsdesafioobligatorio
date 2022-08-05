/*const productos = [
    {nombre: "teclado", precio: 1500},
    {nombre: "mouse", precio: 1000},
    {nombre: "cpu", precio: 3000},
    {nombre: "monitor", precio: 10000},
];

let carrito = []


 let selection = prompt("desea comprar algun producto si o no")

while(selection != "si" && selection != "no") {
    alert ("por favor ingrese si o no")
    selection = promp ("hola desea comprar algo si o no")
}

if (selection == "si") {

    const nombresyPrecios = productos.map ((el) => el.nombre + " " + el.precio);

    alert ("nuestros productos son " + productos.length +" :\n" + nombresyPrecios.join('\n'));

} else if (selection == "no") {
    alert ("gracias por venir, hasta pronto")
}


while ( selection != "no") {    
    let producto = prompt ("agrega productos a tu carrito y ponga esc para terminar");
    let precio = 0 

    if (producto == "teclado" || producto == "mouse" || producto == "cpu" || producto == "monitor") {
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

    let cantidad = parseInt(prompt("cuantas unidades quiere llevar"));

    carrito.push({producto, cantidad, precio})
    console.log(carrito)
    } else {
        alert("no ingreso un producto de la lista o ingreso esc para terminar")
    }


 if (producto == "esc") {
    alert ("gracias por su compra.a continuacion le indicaremos sus productos")
    carrito.forEach((carritoFinal) => {
       alert ("usted compro:\n" + carritoFinal.producto + " " + carritoFinal.cantidad + "=" + (carritoFinal.cantidad * carritoFinal.precio) )
       alert ("el total a pagar por producto:\n" + (carritoFinal.cantidad * carritoFinal.precio) )


    })
 break;
 }
}

const total = carrito.reduce ((ecc, el) => ecc +( el.precio * el.cantidad), 0)
alert ("el total a pagar es: " + total)*/
const agregar = document.getElementById('agregar')
let cantidad =  document.getElementsByClassName('cantidad');

let carrito = [];

const productos = [
{producto: "teclado", precio: 1500},
{producto: "mouse",precio: 1000},
{producto: "cpu",precio: 3000},
{producto: "monitor",precio: 10000},
];


function compra (producto, precio) {
    console.log(producto, precio);
    productos.push(producto);
    carritoFinal = carrito + (precio * cantidad);
    document.getElementById ('compra').innerHTML = 'pagar $${carritoFinal}'
}




const pagar = document.getElementById('pagar');

pagar.addEventListener ('submit', () => {
    carrito.forEach((carritoFinal) => {
        alert ("usted compro:\n" + carritoFinal.producto + " " + carritoFinal.cantidad + "=" + (carritoFinal.cantidad * carritoFinal.precio) )
        alert ("el total a pagar por producto:\n" + (carritoFinal.cantidad * carritoFinal.precio) )
    })


});


const total = carrito.reduce ((ecc, el) => ecc +( el.precio * el.cantidad), 0)
alert ("el total a pagar es: " + total)