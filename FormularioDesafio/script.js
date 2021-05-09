var lista = [];

var botaoAdicionar = document.querySelector(".botaoAdd");

botaoAdicionar.addEventListener("click", function(e) {

    var form = document.querySelector("#form-add");
    if(!form.name.value)return;
    if(!form.email.value)return;
    if(!form.tel.value)return;
    if(!form.cep.value)return;
    if(!form.logradouro.value)return;
    if(!form.numero.value)return;
    if(!form.complemento.value)return;
    if(!form.bairro.value)return; 
    if(!form.uf.value)return;

    let encontrou = false;

   for (var i=0; i<lista.length; i++){
        if(form.email.value == lista[i].email){
            alert("Este email ja está cadastrado!")
           encontrou=true;
        }  
    }

    if(!encontrou) {
        var cliente = obtemClienteDoFormulario(form);
        lista.push(cliente)
        atualizaInterface()
        form.reset();  
    } else{
        e.preventDefault();
        return
    }

   /* console.log("passou por aqui")
    var cliente = obtemClienteDoFormulario(form);
    lista.push(cliente)

   atualizaInterface()

   form.reset(); */   

});

function obtemClienteDoFormulario(form) {

    var cliente = {
        nome: form.name.value,
        email: form.email.value,
        telefone: form.tel.value,
        cep: form.cep.value,
        logradouro: form.logradouro.value,
        numero: form.numero.value,
        complemento: form.complemento.value,
        bairro: form.bairro.value,
        estado: form.uf.value        
    }

    return cliente;
}

function atualizaInterface() {
    
    var teste = document.querySelector(".clientes-cadastrados");

    teste.innerHTML = "";

   for (let i=0; i<lista.length; i++){
    teste.innerHTML += '<ul><button class="fechar" data="'+ i +'" >Remover</button><li>Nome: ' + lista[i].nome + '</li> <li>Email: ' + lista[i].email + '</li> <li>Telefone: ' + lista[i].telefone + '</li><li> CEP: ' + lista[i].cep + '</li><li> Logradouro: ' + lista[i].logradouro + '</li><li> Nº: ' + lista[i].numero + '</li> <li> Complemento: ' + lista[i].complemento + '</li><li> Bairro: ' + lista[i].bairro + '</li><li> Estado: ' + lista[i].estado + '</li></ul>'
   }

   if (lista.length==0){
    teste.innerHTML = "Não há clientes cadastrados.";
   }

   const buttons = document.querySelectorAll(".fechar");
   
   for (const button of buttons) {
        button.addEventListener("click", function(event) {
            console.log(event)
            console.log(lista)
            lista.splice(Number(event.currentTarget.attributes["data"]),1);
            console.log(lista)
            atualizaInterface()

        });
    }
   
}



