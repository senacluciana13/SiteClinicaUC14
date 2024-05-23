function validarFormulario(){

    var nome = document.forms["formulario"]["nome"].value    
    var email = document.forms["formulario"]["email"].value
    var senha = document.forms["formulario"]["senha"].value

    if(nome == ""){
        alert("informe o seu nome")
        return false;
    }    
    if(email == ""){
        alert("informe o seu e-mail")
        return false;
    }else if(!validarEmail(email)){
        alert("Informe um e-mail válido")
        return false;
    }
    if(senha == ""){
        alert("Informe sua senha")
        return false;
    }else if(!validarSenha(senha)){
        alert(" A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra minúscula,uma letra maiúscula e um caractere especial")
        return false;

}
localStorage.setItem("nome",nome)
localStorage.setItem("email",email)
localStorage.setItem("senha",senha)
alert("Cadastro realizado com sucesso!")
return true;


}

function validarEmail(email){
    return email.includes("@") && email.includes(".")
    // verificar se no valor da variavel está incluso o @ e o ponto que é o comum de se está em um e-mail
    // @ e o . corresponde ao dominio
}

function validarSenha(senha){
    // .test é uma função que vai testar e vsi retornar um Boolean (verdadeiro ou falso) que é um recurso que vai validar senha, obrigatorio para todo tipo de aplicação web que usa senha com número
    return senha.length >=8 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha) && /\W/.test(senha)
   
}
function validarLogin(){

    let email = document.getElementById("loginEmail").value
    let senha = document.getElementById("loginSenha").value

    let armazenadoEmail = localStorage.getItem("email")
    let armazenadoSenha = localStorage.getItem("senha")

   
    if(email.trim() === armazenadoEmail.trim() && senha.trim() === armazenadoSenha){
        alert("Login bem sucedido")
        window.location.href = "fila.html"
        
    }else{
        alert("E-mail ou senha incorretos")
    }
    

}
