let listaDeBotoes = document.querySelectorAll(".botao");
let somAtual = null;
let botaoAtual = null;
function tocarSom(idDoAudio) {
    const novoSom = document.getElementById(idDoAudio);
    if (!novoSom) {
        console.log("Áudio não encontrado:", idDoAudio);
        return;
    }
    if (somAtual && somAtual !== novoSom) {
        somAtual.pause();
        somAtual.currentTime = 0;
    }
    novoSom.play();
    somAtual = novoSom;
}
listaDeBotoes.forEach(function(botao){
    botao.onclick = function(){
        if (botaoAtual && botaoAtual !== botao){
            const imagemAnterior = botaoAtual.querySelector("img");
            imagemAnterior.src =
                botaoAtual.dataset.imagemNormal;
        }
        const imagem = botao.querySelector("img");
        imagem.src = botao.dataset.imagemAtiva;
        botaoAtual = botao;
        const idDoAudio = botao.dataset.audio;
        if (idDoAudio){
            tocarSom(idDoAudio);
        }
    };
});