//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

// Função para monitorar pressionamento de teclas
//document.addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é o Enter (código 13)
//    if (event.key === "Enter") {
//        adicionarAmigo();
//    }
//});

function adicionarAmigo(){
    // atribui o elemento input a variável campo
    let campo = document.querySelector('input');

    // Condição para verificar se o input está vazio, se estiver exibe um alerta para o usuário.
    if (campo.value == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        // Adiciona na lista mais um elemento
        listaDeNomes.push(campo.value);
    }

    atualizarListaDeAmigos()
    limpaCampo();
    document.getElementById('resultado').innerHTML = ''

}

// função para limpar o input
function limpaCampo(){
    let campo = document.getElementById('amigo');
    campo.value = '';
    campo.select();
}

// Função para adicionar itens na lista que é demonstrada na tela
function atualizarListaDeAmigos(){
    // atribui o elemento ul a variavel listaAmigos atravez do seu id
    let listaAmigos = document.getElementById('listaAmigos')

    // limpar o elemento ul para não ter nomes duplicados
    listaAmigos.innerHTML = '';

    for (let index = 0; index < listaDeNomes.length; index++) { 
        // Cria um novo <li>
        let lista = document.createElement('li');

        // Define o texto do novo <li> com a primeira letra maiuscula
        lista.textContent = listaDeNomes[index].charAt(0).toUpperCase() + listaDeNomes[index].slice(1);
        
        // Adiciona o novo <li> à <ul>
        listaAmigos.appendChild(lista);  
    } 
}

function sortearAmigo(){
    /* 
    Math.random(): 
        Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).
        Por exemplo, pode gerar algo como 0.375, 0.890, etc.

    Math.random() * listaDeNomes.length: 
        Multiplicamos o valor gerado por Math.random() pelo comprimento do array (nomes.length), 
        para garantir que o valor aleatório esteja dentro do intervalo dos índices do array. 
        No caso, listaDeNomes.length retorna o número de elementos do array.

    Math.floor(): 
        Arredonda o número gerado para o menor número inteiro. 
        Isso garante que o índice será um número inteiro válido, adequado para acessar os elementos do array. 
        Por exemplo, Math.floor(3.874) vai resultar em 3.
    */ 

    if (listaDeNomes.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
        let nomeSorteado = listaDeNomes[indiceSorteado];
        listaDeNomes = [];
        exibirTextoNaTela('resultado', 'O amigo secreto sorteado é: ' + nomeSorteado.charAt(0).toUpperCase() + nomeSorteado.slice(1));
        reiniciarJogo();
    }

    function reiniciarJogo(){
        limpaCampo();
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
    }

    function exibirTextoNaTela(id, texto) {
        let campo = document.getElementById(id);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
}