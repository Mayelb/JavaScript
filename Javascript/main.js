alert("Bienvenido al BAZAR ROSARITO");

function iniciodecompra(){
    item = prompt("Indique el producto que desea \n taza \n mate \n organizador");
    cant = parseInt(prompt("Ingrese la cantidad que desea comprar \n 1 \n 2"));
    
   if ((item == "taza") &&( cant == "1")) {
      alert("Agregaste 1 taza a tu compra");        
} else if ((item == "taza") &&( cant == "2")) {
    alert("Agregaste 2 tazas a tu compra"); 
} else if ((item == "mate") &&( cant == "1")) {
    alert("Agregaste 1 mate a tu compra"); 
} else if ((item == "mate") &&( cant == "2")) {
    alert("Agregaste 2 mates a tu compra"); 
} else if ((item == "organizador") &&( cant == "1")) {
    alert("Agregaste 1 organizador a tu compra");
} else if ((item == "organizador") &&( cant == "2")) {
    alert("Agregaste 2 organizadores a tu compra");
} 
}

 function nombreCliente(){
   cliente = prompt ("ingrese su nombre para continuar la compra");
    
    while ( cliente === ""){
      cliente = prompt ("ingrese su nombre para continuar la compra");
    }
     return cliente;
 }

 function totales(){
    let taza = 500;
    let mate = 600;
    let organizador = 1200;
    
    if ((item == "taza") &&( cant == "1")){
      alert( cliente + "Estás llevando 1 taza cuyo precio es: " + "$" + taza * 1.21);
 } else if ((item == "taza") &&( cant == "2")){
    alert( cliente + "Estás llevando 2 tazas cuyo precio es: " + "$" + taza * 2 * 1.21);
 } else if ((item == "mate") &&( cant == "1")){
    alert( cliente + "Estás llevando 1 mate cuyo precio es: " + "$" + mate * 1.21 );
 } else if ((item == "mate") &&( cant == "2")){
    alert( cliente + "Estás llevando 2 mates cuyo precio es: " + "$" + mate * 2 * 1.21);
 } else if ((item == "organizador") &&( cant == "1")){
    alert( cliente + "Estás llevando 1 organizador cuyo precio es: " + "$" + organizador * 1.21 );
 } else if ((item == "organizador") &&( cant == "2")){
    alert( cliente + "Estás llevando 2 organizadores cuyo precio es: " + "$" + organizador * 2 * 1.21 );
 }
}


iniciodecompra(); 
nombreCliente();
totales();
alert("¡Gracias por comprar en BAZAR ROSARITO!")
 
let cliente = prompt ("ingrese su nombre para continuar la compra");

