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
let tarjetas = document.getElementById('tarjetas');

console.log(tarjetas) 

let productos = [
    {
        id: 1,
        producto: "teclado",
        precio: 1500,
        img: "imagenes/teclado.jpg"

    },
    {
        id: 2,
        producto: "mouse",
        precio: 1000,
        img: "imagenes/mouse.jpg"
    },
    {
        id: 3,
        producto: "cpu",
        precio: 3000,        
        img: "imagenes/cpu.jpg" 
    },
    {
        id:4,
        producto: "monitor",
        precio: 10000,        
        img: "imagenes/monitor.jpg"
    },
    ];

    
    let generarcompra = () => {
        return (tarjetas.innerHTML = productos.map((e)=>{
            let {producto, precio, id, img } = e
            return (tarjetas.innerHTML= `
            <div id=producto-id-${id} class="card" style="width: 18rem;">
      <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto}</h5>
        
        <a id="agregar" class="btn btn-primary agregar">Agregar</a>
        <div class="price-quanity">
        <p class="card-text">$ ${precio}</p>
        <div class"bottons">
        <i onclick="cantidadSuma(${id})" class="bi bi-dash-lg">+</i>
        <div id=${id} class="quantity">0</div>
        <i onclick="cantidadResta(${id})" class="bi bi-dash-lg">-</i>
        </div>
        </div>
        <div>
          <input class="cantidad" type="text">
        </div>
      </div>
    </div>`
        )}).join(" "))
    }

    generarcompra ();

    let cantidad =[];

    let cantidadSuma = (id) => {
        let selectedItem = id;
        let search = cantidad.find((e) => e.id === selectedItem.id);

        if (search === undefined) {
            cantidad.push({
                id: selectedItem.id,
                item: 1,

            });
            

        } else {
            search.item += 1;
        }
        
        console.log(cantidad);
        cantidadTotal(selectedItem.id)
    };
    let cantidadResta = (id) => {
        let selectedItem = id;
        let search = cantidad.find((e) => e.id === selectedItem.id);

        if (search.item === 0) return
        else {
            search.item -= 1;
        }
        
        console.log(cantidad);
        cantidadTotal(selectedItem.id)

    }
    let cantidadTotal = (id) => {
        console.log(id)
    }


    
    // let carrito = [];
    // const agregar = document.getElementById('agregar')

    // for (const producto of productos){
    //     agregar.addEventListener("click", agregarproducto)
    //     function agregarproducto ( ){
    //         console.log (producto.precio)
    //     }

    // }


    