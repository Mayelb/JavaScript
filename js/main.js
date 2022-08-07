let stock
const contenedorproducto = document.getElementById("container");
let contenedorCarrito = document.getElementById("carrito");
let formulario = document.getElementById("datos")
let total= 0;
let carrito = []
 
async function cargarProductos(){
  stock = await fetch ('stock.json')
  stock = await stock.json();
  
  stock.forEach((producto,indice) =>{
  let card = document.createElement("div");
  card.classList.add("col-s-m-4");
  card.innerHTML = `<div class="item-card shadow bg-body rounded">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text"> $${producto.precio}</p>
      <a href="" class="btn btn-outline-info" onClick="agregarAlcarrito(${indice})">Agregar</a>
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
        div.innerHTML = `<img class="car-img" src="${producto.img}"/>
        <p>${producto.producto}</p>
        <p>Precio: $ ${producto.precio}</p>
        <p>Cantidad: <span id ="cantidad"> ${producto.cantidad}</span></p>
        <p>Subtotal: $ ${producto.precio * producto.cantidad}</p>
        <button class="btn btn-info" id="eliminar-producto" onClick="eliminarProducto(${indice})"><i class="fas fa-trash-alt"></button>`; 

      contenedorCarrito.appendChild(div);
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

  fetch("https://formsubmit.co/ajax/ff2478b0eb636b2ecf2d30df7a49df71",{
    method:"POST",
    body:new FormData(e.target)
  })
  .then(datos => datos.ok ? datos.json(): Promise.reject(datos))
  .then(json=>{
    console.log(json);
    listForm.reset();
  })
  .catcher(error=>{
  console.log(error);
  });
}

const agregarAlcarrito=(indice)=>{
  const indiceCarrito = carrito.findIndex((elemento)=>{
    return elemento.id === stock[indice].id
  });

  if(indiceCarrito === -1){
    const agregarProducto = stock[indice];
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
   
const finalizarCompra = ()=>{
  Swal.fire({
    title: '¡Ya casi es tuyo!',
    icon: 'info',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:'<a href="../form.html"><b>Continuar</b></a>',
    confirmButtonAriaLabel: 'Thumbs up, Continuar!',
    confirmButtonColor:'#BDF2F4',
  })
}

const actualizarStorage =(carrito)=>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

cargarProductos()
   
    
