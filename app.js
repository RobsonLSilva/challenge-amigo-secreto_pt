//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

function adicionarAmigo(){
    let campo = document.querySelector('input');

    if (campo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeNomes.push(campo.value);
        console.log(listaDeNomes);
        limpaCampo();
    }
}

function limpaCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}