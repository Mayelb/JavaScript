alert("Bienvenido al BAZAR ROSARITO"); 
  
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
        precio:"900",
        img:"../img/pantumedias.jpg"
    },     
];
 
const contenedorproducto = document.getElementById("container");
let contenedorCarrito = document.getElementById("carrito");
let total= 0;
let carrito = []

stockProducto.forEach((producto, indice) =>{
    let card = document.createElement("div");
    card.classList.add("col-s-m-12");
    card.innerHTML = `<div class="item-card  shadow p-3 m-5 bg-body rounded">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text"> $${producto.precio}</p>
      <a href="#"  class="btn btn-outline-info" onClick="agregarAlcarrito(${indice})">Agregar</a>
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
            <p>${producto.producto}
            <p>Precio: $ ${producto.precio}</p>
            <p>Cantidad: <span id ="cantidad"> ${producto.cantidad}</span></p>
            <p>Subtotal: $ ${producto.precio * producto.cantidad}</p>
            <button class="btn btn-info" id="eliminar-producto" onClick="eliminarProducto(${indice})"><i class="fas fa-trash-alt"></button>`; 
        
        contenedorCarrito.appendChild(div)
    });
   }
   const contenedorTotales =document.createElement("totales");
   contenedorTotales.className="Total";
   contenedorTotales.innerHTML=`<div class="total"> Total: $${total}</div>`;
   contenedorCarrito.appendChild(contenedorTotales);  
};


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
};

















 