let ProductosCargados = document.getElementById('ProductosCargados');

let productosCarrito = document.getElementById('productosCarrito');

let cantidad = JSON.parse(localStorage.getItem("data")) || [];

let calcular = () => {
    let carritoCantidad = document.getElementById("carritoCantidad");
    carritoCantidad.innerHTML =cantidad.map((e)=>e.item).reduce((e,y)=> e + y, 0);

  
}
calcular();

fetch('./jsdesafio/data.json')
   .then((Response) => Response.json())
   .then((data) =>{
    let generarcartitems = ()=>{
    if (cantidad.length !== 0) {
        return productosCarrito.innerHTML = cantidad.map((e)=>{
            let {id, item} = e;
            let search = data.find ((y)=>y.id === id) || [];
            let {img, producto, precio} = search;
            
            return `
            <div class="cart-item">
            <img width="100" src=${img} alt="" />
            <div class="details ">

            <div class="producto-precio-carrito">
               <h4 class="producto-precio ">
                <p>${producto}</p>
                <p class="precio-carrito">$${precio}</p>
                </h4>
                <button onclick="quitarProducto(${id})" type="button" class=" btn-close  " aria-label="Close"></button>
              </div>


              
              <div id=${id} class="quantity ">
              <p class="mb-0" > cantidad: ${item}</p>
                  
                </div>
              

            <h3>$ ${item * search.precio}</h3>
            
            </div>
            </div>
            `;
        })
        .join("");

    } else {
        productosCarrito.innerHTML = ``;
        ProductosCargados.innerHTML = `
        <h2>Carrito vacio</h2>
        <a href="index.html">
        <button class= "homeBtn">Volver a Paguina de Inicio</button>
        </a>
        `;
    }
};




generarcartitems();




 quitarProducto =(id)=> {
    let seleccionItem = id;

    cantidad = cantidad.filter((e)=> e.id !== seleccionItem);

    generarcartitems();
    CarritoTotal();
    calcular();

    localStorage.setItem("data", JSON.stringify(cantidad));

};





 vaciarCarrito = ()=> {
    cantidad = [];
    generarcartitems();
    calcular();
    localStorage.setItem("data", JSON.stringify(cantidad))
    

}

let CarritoTotal = ()=>{
    if (cantidad.length !== 0){
        let total = cantidad.map((e)=>{
        let {item, id} = e;
        let search = data.find ((y)=>y.id === id) || [];
        return item * search.precio;    
        })
        .reduce((x, y)=> x + y, 0);
       //console.log(total)
       ProductosCargados.innerHTML = `
     <h2>Total de la Compra: $ ${total}</h2>
     <button class="checkout">checkout</button>
     <button onclick="vaciarCarrito()" class="vaciarCarrito">vaciar carrito</button> `
    } else return;

};
CarritoTotal();

});



