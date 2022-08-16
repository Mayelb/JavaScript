 
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
    text: 'Completa tus datos a continuación',
    imageUrl: '../img/saludo.jpg',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:'<a href="../form.html"><b>Continuar</b></a>',
    confirmButtonAriaLabel: 'Thumbs up, Continuar!',
    confirmButtonColor:'#BDF2F4',
  })
}
function saludo(){
  Swal.fire({
    imageUrl: '../img/saludo.jpg',
    title: 'Gracias por tu compra',
  });
}  
const actualizarStorage =(carrito)=>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

cargarProductos()
 

