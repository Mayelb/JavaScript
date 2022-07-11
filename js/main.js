alert("Bienvenido al BAZAR ROSARITO"); 
  
class Items {
    constructor ( producto, precio,) {
        this.producto = producto;
        this.precio = precio;
    }
}
 let cliente;
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
let carrito = []

const contenedorproducto = document.getElementById("container");
stockProducto.forEach((producto, indice) =>{
    let card = document.createElement("div");
    card.classList.add("col-s-m-12");
    card.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-primary" onClick="agregarAlcarrito(${indice})">Agregar</a>
    </div>`
    contenedorproducto.appendChild(card);
    console.log(carrito)
});

 const agregarAlcarrito=(indice)=>{
    const indicecarrito = carrito.findIndex((elemento)=>{
        return elemento.id === stockProducto[indice].id
    });
if(indicecarrito === -1){
    const agregarProducto = stockProducto[indice];
    agregarProducto.cantidad =1
    carrito.push(agregarProducto)    
}
}
 

























 