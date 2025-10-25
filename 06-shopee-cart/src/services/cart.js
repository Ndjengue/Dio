
//Adicionar Item no Carrinho,
async function addItem (userCart,item) {
  userCart.push(item);
};

//calcular o total do carrinho
async function calculateTotal(userCart){
   const result = userCart.reduce((total,item)=>total+item.subtotal(),0);
 return result;
};

async function calculateTotalv2(userCart) {
  return userCart.reduce(function(total, item) {
    return total + item.subtotal();
  }, 0);
};

async function calculateTotalv3(userCart){
    let total =0;
    userCart.forEach(element => {
        total +=element.subtotal();
    });
    return total;
}

//Deletar item do carrinho; Excluir item, exemplo 3 fantas ficaria sem as 3 deste produto
async function deleteItem (userCart, name){
    //pesquisa o nome da propriedade passada e busca o index no array, se nã encontrar retorna -1
    const index = userCart.findIndex((item)=>item.name==name);

    if(index!=-1){
      userCart.splice(index,1); // vai eliminar a partir de uma zona especifica, a partir do index 1 elemento
    }
};

//remover um item; diminuir item produto por completo daquela linha, não importa se tem 3qtde
async function removeItemByIndex (userCart,index){
   if(index >0 && index <= userCart.length){
     const deleteIndex = index-1;
      userCart.splice(deleteIndex,1);//porque os index da tela foram acrescidos 1 no momento da listagem
   }
};

// Função para remover item do carrinho
async function removeItem(userCart, item) {
  // Pesquisa o nome da propriedade passada e busca o index no array
  const indexFound = userCart.findIndex(produto => produto.name === item.name);

  if (indexFound === -1) {
    console.log("Produto não encontrado");
    return;
  }

  const produto = userCart[indexFound];

  // Caso quantidade > 1, diminui apenas uma unidade
  if (produto.quantity > 1) {
    produto.quantity -= 1;
    console.log(`Removida 1 unidade de ${produto.name}. Restam ${produto.quantity}.`);
    return;
  }

  // Caso quantidade == 1, remove o produto completamente
  userCart.splice(indexFound, 1);
  console.log(`${produto.name} removido do carrinho.`);
}


async function dislplayCart(userCart){
  userCart.forEach((item,index)=>{
    console.log(`${index +1} | Nome: ${item.name} Qde: ${item.quantity} x Preço: ${item.price} = Subtotal: ${item.subtotal()}`);
  });
}

export {
    addItem,
    calculateTotal,
    calculateTotalv2,
    calculateTotalv3,
    deleteItem,
    removeItemByIndex,
    removeItem,
    dislplayCart
};

