const formularioFila = document.getElementById("Form");
const comprimentoFilaSpan = document.getElementById("Length");
const clienteAtualSpan = document.getElementById("Cust");

let fila = [];

formularioFila.addEventListener("submit", function(evento){
  evento.preventDefault();

  const nomeCompleto = document.getElementById("Name").value;
  const cpf = document.getElementById("cpf").value;
  const prioridade = document.getElementById("priori").value;
  const tipoPlano = document.getElementById("tipo").value;
 


  const cliente = {
    nomeCompleto: nomeCompleto,
    cpf: cpf,
    prioridade: prioridade,
    tipoPlano: tipoPlano,
  };

  fila.push(cliente);
  atualizarComprimentoFila();
  formularioFila.reset();

});
function mensagem(){
 
  let tipoPlanos = document.getElementById("tipo").value 
  if(tipoPlanos === "particular"){              
      document.getElementById("tipoPlanos")
      document.getElementById("mostrar").innerHTML = `Você selecionou Plano Particular.`
  }else if(tipoPlanos === "flex"){          
      document.getElementById("tipoPlanos")
      document.getElementById("mostrar").innerHTML = `Você selecionou Plano Flex. `
  }else if(tipoPlanos === "max"){           
      document.getElementById("tipoPlanos")
      document.getElementById("mostrar").innerHTML = `Você selecionou Plano MAX.`
  }else if(tipoPlanos === "diamante"){
    document.getElementById("tipoPLANOS")
    document.getElementById("mostrar").innerHTML = `Você selecionou Plano Diamante.`
  }else if(tipoPlanos === "gold"){
    document.getElementById("tipoPlanos")
    document.getElementById("mostrar").innerHTML = `Você selecionou Plano Gold.`
  }else if(tipoPlanos === "empresarial"){
    document.getElementById("tipoPlanos")
    document.getElementById("mostrar").innerHTML = `Você selecionou Plano Empresarial.`
  }    
  
}

document.getElementById("btnExecute").addEventListener("click", function(){
if (fila.length === 0){
    alert("Não há clientes na fila de espera.");
    return;
}

let indiceProximoCliente = 0;

for (let i = 0; i < fila.length; i++) {
  if (fila[i].prioridade !== "vermelho"){
    indiceProximoCliente = i;
    break;
  }
}


const proximoCliente = fila.splice(indiceProximoCliente, 1)[0];
const informacoesCliente = `${proximoCliente.nomeCompleto} (CPF: ${proximoCliente.cpf}) (Prioridade: ${proximoCliente.prioridade})   (Tipo de Plano: ${proximoCliente.tipoPlano})`;

clienteAtualSpan.textContent = informacoesCliente;
atualizarComprimentoFila();

});
function atualizarComprimentoFila() {
    comprimentoFilaSpan.textContent = fila.length;
}