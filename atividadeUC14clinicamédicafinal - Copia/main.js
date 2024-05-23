let carrinho = [] 

function adicionarProduto(nome, preco, imagem) {
  carrinho.push({ nome, preco, imagem }) 
  atualizarCarrinho() 
}

function removerProduto(index) {
  carrinho.splice(index, 1) 
  atualizarCarrinho() 
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho")
  listaCarrinho.innerHTML = ""


  carrinho.forEach((produto, index) => {
    const li = document.createElement("li") 
    li.innerHTML = `
      <img src="${produto.imagem}">
      <span>${produto.nome}</span>
      <span>R$ ${produto.preco}</span>
      <button onclick="removerProduto(${index})">Remover</button>
    `;

    listaCarrinho.appendChild(li) 
  })

  const carrinhoContainer = document.getElementById("carrinho") ;
  const totalCarrinho = document.getElementById("total-carrinho"); 

  const total = carrinho.reduce((total, produto) => total + produto.preco, 0);
  totalCarrinho.innerText = total.toFixed(2); 

  const carrinhoDiv = document.getElementById('carrinho');
  if(carrinhoDiv.lenght > 0){
    carrinho.style.display = 'block'; //mostra o carrinho caso tenha algum produto
  }else{
    carrinhoDiv.style.display ='nome';//oculta o carrinho se estiver vazio
  }
}
//função auto executável*/
(function (){
  paypal.Buttons({
    //função que vai chamar a ordem de pagamento*/
    createOder: function(data, actions){
      //retorno da chamada para criar uma ordem
      return actions.order.create({
        purchase_units:[{
          amount:{
            currency_code: 'BRL',
            //o valor total é calculado
            value: carrinho.reduce((total,produto)=> total + produto.preco, 0)
          }
        }]
      });
    
    },

    onApprove: function(data, actions){
      return actions.order.capture().then(function(details){
        console.log('Pagamento realizado com sucesso!');
        
      });
    },
    onError:function(err){
      console.error('Ocorreu um erro durante o pagamento',err);
    }
  }).render('#paypal-button-container');//renderizar o botão paypal

  
})();//executa a função auto executável
function logout(){
  window.location.href = "login.html"
}