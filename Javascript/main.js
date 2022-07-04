alert("Bienvenido al BAZAR ROSARITO");

class Compra {
    constructor ( producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
    }
}

 let stock = [
    {producto:"taza", precio:"500"},
    {producto:"mate", precio:"600"},
    {producto:"organizador", precio:"1200"},
    {producto:"bolsa de agua caliente", precio:"2400"},
    {producto:"pantumedias", precio:"900"},     
 ];

function iniciodecompra(arrayItems) {
    let producto = prompt("Indique el producto que desea");
    let precio = parseInt(prompt("Ingrese el precio"));

    const nuevaCompra = new Compra (producto, precio);

    arrayItems.push(nuevaCompra);
    console.log("Producto agregado");
}

   function ContinuarCompra() {
    arrayItems.forEach((Compra) => {
      alert( "Has agregado al carrito" + producto +" por $" + (precio * 1.21));
    });
  }
    
  let cliente;
  function nombreCliente(){
       cliente = prompt ("ingrese su nombre para continuar la compra");
      
      while ( cliente === ""){
        cliente = prompt ("ingrese su nombre para continuar la compra");
       }
       return cliente;
     }

 function FinalizarCompra() {
  const giftcard = precio.filter((el) => el.precio > 100);
  for ( const giftcard of giftcard) {
    alert("¡Felicitaciones!"+ giftcard.cliente + "por tu compra de" + giftcard.precio + " recibiste un cupon de descuento de $600 para tu próxima compra");
  }
 }
 
alert("¡Gracias  por comprar en BAZAR ROSARITO!");
 