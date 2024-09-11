const celulas = document.querySelectorAll('.celula');
const mensagem = document.getElementById('mensagem');
let jogadorAtual = "x";
console.log(jogadorAtual);
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        const index = celula.getAttribute('data-index');
        if (tabuleiro[index] === '') {
            tabuleiro[index] = jogadorAtual;
            celula.textContent = jogadorAtual;
            if (verificarVencedor()) {
                if(jogadorAtual != "x" && jogadorAtual != "O"){
                    alert("Empate!")
                }
                // mensagem.textContent = `Jogador ${jogadorAtual} venceu!`;
                alert("Jogador " + `${jogadorAtual}` + " venceu!")
                reset();
            } else {
                jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
            }
        }
    });
});
function reset(){
    window.location.reload();
}
function verificarVencedor() {
    const combinacoesVencedoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return combinacoesVencedoras.some(combinacao => {
        return combinacao.every(index => {
            return tabuleiro[index] === jogadorAtual;
              
        });
    });   
    
}

