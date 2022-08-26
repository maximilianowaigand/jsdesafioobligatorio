
let tarjetas = document.getElementById('tarjetas');

fetch('./jsdesafio/data.json')
   .then((Response) => Response.json())
   .then((data) => { setTimeout (()=> console.log(data), 100)
    
});

    
   

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
        id: 4,
        producto: "monitor",
        precio: 10000,        
        img: "imagenes/monitor.jpg"
    },
    ];
    
    let cantidad = JSON.parse(localStorage.getItem("data")) || []

    
    let generarcompra = () => {
        return (tarjetas.innerHTML = productos.map((e)=>{
            let  { id, producto, precio, img } = e;
            let search = cantidad.find ((e) => e.id === id) || [];
            return `
            <div id=producto-id-${id} class="item" style="width: 18rem;">
      <img src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto}</h5>
        
        <a id="agregar" class="btn btn-primary agregar">Agregar</a>
        <div class="price-quanity">
        <p class="card-text">$ ${precio}</p>
        <div class"bottons">
        <i onclick="cantidadSuma(${id})" class="bi bi-dash-lg">+</i>
        <div id=${id} class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
        <i onclick="cantidadResta(${id})" class="bi bi-dash-lg">-</i>
        </div>
        </div>
        <div>
          <input class="cantidad" type="text">
        </div>
      </div>
    </div>`;
        })
        .join(" "));
    };

    generarcompra ();



    
    

    let cantidadSuma = (id) => {
        let selectedItem = id;
        let search = cantidad.find((e) => e.id === id);

        if (search === undefined) {
            cantidad.push({
                id: id,
                item: 1,

            });
            

        } else {
            search.item += 1;
        };
        Swal.fire('Any fool can use a computer');
        cantidadTotal(selectedItem);
        cantidad = cantidad.filter ((e)=> e.item !== 0);
      // console.log(cantidad);   
       

       localStorage.setItem("data", JSON.stringify(cantidad));
        
    };
    let cantidadResta = (id) => {
        let selectedItem = id;
        let search = cantidad.find((e) => e.id === id);

        if (search.item === 0) return;
        else {
            search.item -= 1;
        };
        
       // console.log(cantidad);
        cantidadTotal();

    };
    let cantidadTotal = (id) => {
        let search = cantidad.find((e)=> e.id === id);
        //console.log(search.item);
       document.getElementById(id).innerHTML = search.item;
       calcular();
    }; 

    let calcular = () => {
        let carritoCantidad = document.getElementById("carritoCantidad");
        carritoCantidad.innerHTML =cantidad.map((e)=>e.item).reduce((e,y)=> e + y, 0);

      
    }


    
    // let carrito = [];
    // const agregar = document.getElementById('agregar')

    // for (const producto of productos){
    //     agregar.addEventListener("click", agregarproducto)
    //     function agregarproducto ( ){
    //         console.log (producto.precio)
    //     }

    // }


    