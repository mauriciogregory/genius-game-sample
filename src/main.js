let ordem = [];
// ordem dos cliques
let clickedOrder = [];

//pontos
let score = 0;

//0 - verde   1 - vermelho  2 - amarelo 3-azul
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    ordem[ordem.length] = colorOrder;
    clickedOrder = [];

    for (let i in ordem) {
        let elementColor = createColorElement(ordem[i]);
        // traz o numero mais 1 na lista de cores
        lightColor(elementColor, Number(i) + 1);
    }
}

// ascende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
    }, 450);
}

//checa se os botoes foram clicados na ordem gerada
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != ordem[i]) {
            //luz
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == ordem.length) {
        alert('Pontuação: ' + score + '\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}


// funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}


//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }

}

// funcao par ao outro level d jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}


// funcao para que perder o jogo
let gameOver = () => {
    alert('Pontuação: ' + score + '\nVocê perdeu');
    ordem = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem-Vindo');
    score = 0;

    nextLevel();
}

//green.addEventListener('click', click(0));
//red.addEventListener('click', click(1));
//yellow.addEventListener('click', click(2));
//blue.addEventListener('click', click(3));

//eventos de cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia jogo
playGame();