let elementoInputUser = document.getElementById('cadUsuario')
let elementoInputPass = document.getElementById('cadPassword')
let elementoInputEmail = document.getElementById('cadEmail')
let elementoEdittUser = document.getElementById('editUsuario')
let elementoEditPass = document.getElementById('editPassword')
let elementoEditEmail = document.getElementById('editEmail')
let elementodlttUser = document.getElementById('dltUsuario')

let elementoDivListagem = document.getElementById('divLista')

let vetornomes = []
let vetorsenha = []
let vetoremails = []

let posicaoUser

function cadastrar(){
    document.getElementById('cadastros').style.display = 'block';
    document.getElementById('editar').style.display = 'none';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('deletar').style.display = 'none';
}

function editar(){
    document.getElementById('cadastros').style.display = 'none';
    document.getElementById('editar').style.display = 'block';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('deletar').style.display = 'none';
}

function listar(){
    document.getElementById('cadastros').style.display = 'none';
    document.getElementById('editar').style.display = 'none';
    document.getElementById('listar').style.display = 'block';
    document.getElementById('deletar').style.display = 'none';
    exibeLista();
}
function deletar(){
    document.getElementById('cadastros').style.display = 'none';
    document.getElementById('editar').style.display = 'none';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('deletar').style.display = 'block';
}
document.getElementById('').style.display = []


function cad(){
    vetornomes.push(elementoInputUser.value)
    vetorsenha.push(elementoInputPass.value)
    vetoremails.push(elementoInputEmail.value)
    //alert('Bom, cadastro')
    listar()
}


function exibeLista(){
    let listaDados = "";
    for(i=0; i < vetornomes.length; i++){
        listaDados = listaDados + vetornomes[i] + ' - '+ vetoremails[i] +  ' - ' + vetorsenha[i] +'<br>'
    }
    elementoDivListagem.innerHTML = listaDados;
 }

 function edt(){
    posicaoUser = vetornomes.indexOf(elementoEdittUser.value)
    vetorsenha[posicaoUser] = elementoEditPass.value
    vetoremails[posicaoUser] = elementoEditEmail.value
    //alert('Dados Editados!')
    listar()

}

function dlt(){
    posicaoUser = vetornomes.indexOf(elementodlttUser.value)
    vetornomes.splice(posicaoUser, 1)
    vetorsenha.splice(posicaoUser, 1)
    vetoremails.splice(posicaoUser, 1)
    //alert('excluido!')
    listar()

}