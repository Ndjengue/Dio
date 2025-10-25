
import createItem from "./services/item.js";
import * as cartSerrvice from "./services/cart.js";

const myCart = [];

console.log("Welcome to Shopee!");

const item1 = await createItem("Computador HP",350.23,1);
const item2 = await createItem("Computador DELL",250.23,2);
const item3 = await createItem("Mouse HP",350.23,3);

//console.log("Produto:"+item3.name + " Preço: "+item3.price + " Qtde: "+item3.quantity + " Subtotal:"+item3.subtotal());

//adicionando 3 itens ao carrinho
await cartSerrvice.addItem(myCart,item1);
await cartSerrvice.addItem(myCart,item2);
await cartSerrvice.addItem(myCart,item3);

console.log("O Total da Factura: "+ await cartSerrvice.calculateTotalv3(myCart)+ " Kz");

//eliminado um item do carrinho, por isso o total ira reduzir
await cartSerrvice.deleteItem(myCart,item1.name);

console.log("O Total da Factura: "+ await cartSerrvice.calculateTotalv3(myCart)+ " Kz");
cartSerrvice.dislplayCart(myCart);



console.log("Welcome to Shopee - Whish List!");

const myWhishList = []; // ja que o modelo pode ser reaproveitado podemos criar uma lista de desejo
const item4 = await createItem("Computador HP",750.23,5);
const item5 = await createItem("Computador DELL",350.23,1);

await cartSerrvice.addItem(myWhishList,item4);
await cartSerrvice.addItem(myWhishList,item5);
await cartSerrvice.dislplayCart(myWhishList);


console.log("___________________________________"); 
await cartSerrvice.removeItem(myWhishList,item5);
await cartSerrvice.dislplayCart(myWhishList);



