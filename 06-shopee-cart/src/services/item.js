
//Criar item com subtotal certo, vai facilitar ao levar o item ao carrinho ja calculado
async function createItem (name, price, quantity) {
   return {
    name,
    price,
    quantity,
    subtotal:()=>price*quantity,
   };
       
}

export default createItem;

/*async function createItem(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
    subtotal: function() {
      return price * quantity;
    }
  }
}*/