alert("Bienvenido al BAZAR ROSARITO"); 
  
class Items {
    constructor ( producto, precio,) {
        this.producto = producto;
        this.precio = precio;
    }
}

 let cliente;

 let stock = [
    {producto:"taza", precio:"500"},
    {producto:"mate", precio:"600"},
    {producto:"organizador", precio:"1200"},
    {producto:"bolsa de agua caliente", precio:"2400"},
    {producto:"pantumedias", precio:"900"},     
 ];

let arrayItems = [];

function Iniciodecompra(arrayItems) {
    let producto = prompt("Indique el producto que desea");
    let precio = parseInt(prompt("Ingrese el precio"));

    const nuevoItem = new Items (producto, precio);

    arrayItems.push(nuevoItem);
    console.log("Producto agregado"+ producto+ precio);
}

function ContinuarCompra() {
    arrayItems.forEach((Items) => {
      alert(`Has agregado al carrito: ${Items.producto} por $ ${Items.precio *1.21}`);
    });
}

function NombreCliente(){
       cliente = prompt ("ingrese su nombre para continuar la compra");

      while ( cliente === ""){
        cliente = prompt ("ingrese su nombre para continuar la compra");
       }
       return cliente;
 }  
  
function CuponDescuento() {
     const cupones = stock.filter((el) => el.precio > 500);
        for ( const cupon of cupones) {
        alert("¡Felicitaciones!" + cliente + "por tu compra de: $" + cupon.precio + " recibiste un cupon de descuento de $600 para tu próxima compra");
       }
}

 let opciones = prompt(" Seleccione una opción: \n 1) Iniciar compra \n 2) Ver compra \n 3) Cliente \n 4) Finalizar compra \n 5) Salir");

 while( opciones !== "5") {
       if ( opciones === "1") {
        Iniciodecompra(arrayItems);
       }
       if ( opciones ==="2") {
        ContinuarCompra(arrayItems);
       }
       if ( opciones === "3") {
        NombreCliente(arrayItems);
       }
       if ( opciones === "4") {
        CuponDescuento(arrayItems); 
       }
       opciones = prompt(" Seleccione una opción: \n 1) Iniciar compra \n 2) Ver compra \n 3) Cliente \n 4) Finalizar compra \n 5) Salir");
 }


 alert("¡Gracias  por comprar en BAZAR ROSARITO!");
 