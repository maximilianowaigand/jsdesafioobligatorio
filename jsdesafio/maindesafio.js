
let tarjetas = document.getElementById('tarjetas');

fetch('./jsdesafio/data.json')
   .then((Response) => Response.json())
   .then((data) => { let generarcompra = () => {
    return (tarjetas.innerHTML = data.map((e)=>{
        let  { id, producto, precio, img } = e;
        let search = cantidad.find ((e) => e.id === id) || [];
        return `
        <div id=producto-id-${id} class="item ">
  <img width="220" src="${img}" alt="">
  <div class="details">
    <h3>${producto}</h3>
    <a onclick="cantidadSuma(${id})" id="agregar" class="btn btn-primary agregar">Agregar</a>
    <div class="price-quanity">
    <h2>$ ${precio}</h2>
    <div class="buttons">
    <i onclick="cantidadSuma(${id})" class="bi bi-plus-lg">+</i>
    <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
    <i onclick="cantidadResta(${id})" class="bi bi-dash-lg">-</i>
    </div>
    </div>
    </div>
</div>`;
    })
    .join(""));
};

generarcompra ();
    
});


let cantidad = JSON.parse(localStorage.getItem("data")) || [];


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
        localStorage.setItem("data", cantidad)
        Swal.fire({position: 'top-end',
        icon: 'success',
        title: 'tu producto ha sido cargado',
        showConfirmButton: false,
        timer: 1500} );


        cantidadTotal(selectedItem);
        cantidad = cantidad.filter ((e)=> e.item !== 0);
      // console.log(cantidad);   
       

       localStorage.setItem("data", JSON.stringify(cantidad));
        
    };
    let cantidadResta = (id) => {
        let selectedItem = id;
        let search = cantidad.find((e) => e.id === id);

        if (search === undefined) return;
        else if (search.item === 0) return;
        else {
            search.item -= 1;
        };
        cantidadTotal(selectedItem);
        cantidad = cantidad.filter((e)=>e.item !==0);
        
       // console.log(cantidad); 
        


        localStorage.setItem("data", JSON.stringify(cantidad));

    };
    let cantidadTotal = (id) => {
        let search = cantidad.find((e)=> e.id === id);
        console.log(search.item);
       document.getElementById(id).innerHTML = search.item;
       calcular();
    }; 

    let calcular = () => {
        let carritoCantidad = document.getElementById("carritoCantidad");
        carritoCantidad.innerHTML =cantidad.map((e)=>e.item).reduce((e,y)=> e + y, 0);

      
    }

    calcular();
