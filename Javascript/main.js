alert("Bienvenido al BAZAR ROSARITO");

class Compra {
    constructor ( producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;   
    }
}

 let stock = [
    {producto:"taza", precio:"500"},
    {producto:"mate", precio:"600"},
    {producto:"organizador", precio:"1200"},
    {producto:"bolsa de agua caliente", precio:"2400"},
    { producto:"pantumedias", precio:"900"},     
 ];

function iniciodecompra(arrayItems) {
    let producto = prompt("Indique el producto que desea");
    let precio = parseInt(prompt("Ingrese el precio"));
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea llevar"));

    const nuevaCompra = new Compra (producto, precio, cantidad);

    arrayItems.push(nuevaCompra);
    console.log("Producto agregado");

}

let cliente;
function nombreCliente(){
     cliente = prompt ("ingrese su nombre para continuar la compra");
    
    while ( cliente === ""){
      cliente = prompt ("ingrese su nombre para continuar la compra");
     }
     return cliente;
   }

   function finalizarCompra() {
    arrayItems.forEach((Compra) => {
      alert(
        `Has comprado ${Compra.producto} ${Compra.precio} * ${Compra.cantidad} * 1.21`
      );
    });
  }
    
//     if ((item == "taza") &&( cant == "1")){
//       alert( cliente + "Estás llevando 1 taza cuyo precio es: " + "$" + taza * 1.21);
//  } else if ((item == "taza") &&( cant == "2")){
//     alert( cliente + "Estás llevando 2 tazas cuyo precio es: " + "$" + taza * 2 * 1.21);
//  } else if ((item == "mate") &&( cant == "1")){
//     alert( cliente + "Estás llevando 1 mate cuyo precio es: " + "$" + mate * 1.21 );
//  } else if ((item == "mate") &&( cant == "2")){
//     alert( cliente + "Estás llevando 2 mates cuyo precio es: " + "$" + mate * 2 * 1.21);
//  } else if ((item == "organizador") &&( cant == "1")){
//     alert( cliente + "Estás llevando 1 organizador cuyo precio es: " + "$" + organizador * 1.21 );
//  } else if ((item == "organizador") &&( cant == "2")){
//     alert( cliente + "Estás llevando 2 organizadores cuyo precio es: " + "$" + organizador * 2 * 1.21 );
//  }
// }




// alert("¡Gracias por comprar en BAZAR ROSARITO!")
 

