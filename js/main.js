let stock
const contenedorproducto = document.getElementById("contenedor");
let contenedorCarrito = document.getElementById("carrito");
let formulario = document.getElementById("datos")
let total= 0;
let carrito = []
 
async function cargarProductos(){
  stock = await fetch ('stock.json');
  stock = await stock.json();
  
  stock.forEach((producto,indice) =>{
  let card = document.createElement("div");
  card.classList.add("col-s-m-4");
  card.innerHTML = `<div class="item-card shadow bg-body rounded">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text"> $${producto.precio}</p>
      <button class="btn btn-outline-secondary" onClick="agregarAlcarrito(${indice})">Agregar</button>
    </div>
    </div>`
  contenedorproducto.appendChild(card);
  
  });
}

const actualizarCarrito =()=>{
  contenedorCarrito.className="carrito";
  contenedorCarrito.innerHTML="";
    if(carrito.length > 0){
      carrito.forEach((producto, indice)=>{
        total = total + producto.precio * producto.cantidad;
        const div =document.createElement("div");
        div.className =("carrito");
        div.innerHTML =`<table class="table">
        <td><img class="car-img" src="${producto.img}"/></td>
        <td><p> ${producto.producto}</p></td>
        <td><p>Precio $${producto.precio}</p></td>
        <td><p>Cantidad ${producto.cantidad}</p></td>
        <td><p>Subtotal $${producto.precio * producto.cantidad}</p></td>
        <td><button class="btn btn-info" id="eliminar-producto" onClick="eliminarProducto(${indice})"><i class="fas fa-trash-alt"></button></td></table>`; 

      contenedorCarrito.appendChild(div);
    });
   
    const contenedorTotales =document.createElement("totales");
    contenedorTotales.className="total";
    contenedorTotales.innerHTML=`<div class="total"><h3> Total: $${total}</h3></div>
    <button class="btn btn-info" id="finalizar-compra" onClick="finalizarCompra()">Finalizar Compra</button>`;
    contenedorCarrito.appendChild(contenedorTotales); 
   } else{
     contenedorCarrito.classList.remove("carrito");
   }  
};
const datoscliente=()=>{
  let listForm = document.getElementById("list-Form");
  listForm.addEventListener("submit", function(e){
    e.preventDefault()

    let nombre = document.getElementById ("nombre").value;  
    let email = document.getElementById("email").value;
    contenedorCarrito.innerHTML="";
    
  });
  }