function saludo(){
    Swal.fire({
        title: '¡Bienvenido al Bazar Rosarito!',
        text: 'Tu tienda de regalos de confianza',
        imageUrl: '../img/saludo.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })

}
   
saludo();

  
 let stockProducto = [
    { 
        id: 1,
        producto:"Taza", 
        precio:"500",
        img: "../img/taza.jpg"
    },
    {
        id: 2,
        producto:"Mate", 
        precio:"600",
        img:"../img/mate.jpg"
    },
    {
        id: 3,
        producto:"Organizador",
         precio:"1200",
         img:"../img/organizador.jpg"
    },
    {   id: 4,
        producto:"Bolsa de agua caliente", 
        precio:"2400",
        img:"../img/bolsa de agua caliente.jpg"
    },
    {
        id: 5,
        producto:"Pantumedias",
        precio:"1800",
        img:"../img/pantumedias.jpg"
    }, 
    {
        id: 6,
        producto:"Vaso térmico",
        precio:"900",
        img:"../img/vaso termico.jpg"
    },   
];
 
const contenedorproducto = document.getElementById("container");
let contenedorCarrito = document.getElementById("carrito");
let formulario = document.getElementById("datos")
let total= 0;
let carrito = []
 
stockProducto.forEach((producto,indice) =>{
    let card = document.createElement("div");
    card.classList.add("col-s-m-4");
    card.innerHTML = `<div class="item-card shadow bg-body rounded">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text"> $${producto.precio}</p>
      <a href="" class="btn btn-outline-info"  onClick="agregarAlcarrito(${indice})">Agregar</a>
    </div>
    </div>`
    contenedorproducto.appendChild(card);
});

const actualizarCarrito =()=>{
    contenedorCarrito.className="carrito";
    contenedorCarrito.innerHTML="";
     if(carrito.length > 0){
        carrito.forEach((producto, indice)=>{
            total = total + producto.precio * producto.cantidad;
            const div =document.createElement("div");
            div.className =("carrito");
            div.innerHTML = `<img class="car-img" src="${producto.img}"/>
            <p>${producto.producto}</p>
            <p>Precio: $ ${producto.precio}</p>
            <p>Cantidad: <span id ="cantidad"> ${producto.cantidad}</span></p>
            <p>Subtotal: $ ${producto.precio * producto.cantidad}</p>
            <button class="btn btn-info" id="eliminar-producto" onClick="eliminarProducto(${indice})"><i class="fas fa-trash-alt"></button>`; 

        contenedorCarrito.appendChild(div);
        console-console.log(carrito)
    });
   
    

    const contenedorTotales =document.createElement("totales");
    contenedorTotales.className="Total Compra";
    contenedorTotales.innerHTML=`<div class="total"> Total: $${total}</div>
    <button class="btn btn-info" id="finalizar-compra" onClick="FinalizarCompra()">Finalizar Compra</button>`;
    contenedorCarrito.appendChild(contenedorTotales); 
   } else{
     contenedorCarrito.classList.remove("carrito");
   }  
     
   };
   const datoscliente=()=>{
    let listForm = document.getElementById("list-Form");
 listForm.addEventListener("submit", function(e) {
 	e.preventDefault()
 	let nombre = document.getElementById ("nombre").value;  
   let email = document.getElementById("email").value;
   contenedorCarrito.innerHTML=""
}); 
}
   const agregarAlcarrito=(indice)=>{
     const indiceCarrito = carrito.findIndex((elemento)=>{
         return elemento.id === stockProducto[indice].id
     });
   if(indiceCarrito === -1){
     const agregarProducto = stockProducto[indice];
     agregarProducto.cantidad =1;
     carrito.push(agregarProducto);
     actualizarStorage(carrito);
     actualizarCarrito()
   } else{
     carrito[indiceCarrito].cantidad += 1;
     actualizarStorage(carrito);
     actualizarCarrito()
   }
   };
   
   const eliminarProducto=(indice)=>{
     carrito.splice(indice, 1);
     actualizarStorage(carrito);
     actualizarCarrito()
   };
   
   const actualizarStorage =(carrito)=>{
     localStorage.setItem("carrito", JSON.stringify(carrito));
   }
    
   
   
    
