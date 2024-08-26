const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor marca de trator?",
        alternativas: [
            {
                texto: "é a pior",
                afirmacao: "Agralle"
            },
            {
                texto: "é a melhor",
                afirmacao: "Valtra"
            }
        ]
    },
    {
        enunciado: "Quantos litros de dieesel vai em um trator?",
        alternativas: [
            {
                texto: "60l",
                afirmacao: "Resposta correta."
            },
            {
                texto: "20l",
                afirmacao: "Resposta errada"
            }
        ]
    },
    {
        enunciado: "Quantas rodas vai em um trator?",
        alternativas: [
            {
                texto: "4 rodas",
                afirmacao: "Resposta correta"
            },
            {
                texto: "2 rodas",
                afirmacao: "Resposta errada "
            }
        ]
    },
    {
        enunciado: "Quantas pessoas cabem dentro de um trator?",
        alternativas: [
            {
                texto: "2 pessoas",
                afirmacao: "Resposta correta"
            },
            {
                texto: "4 pessoas",
                afirmacao: "Resposta errada"
            }
        ]
    },
    {
        enunciado: "Quantas portas tem um trator? ",
        alternativas: [
            {
                texto: "1 porta",
                afirmacao: "Resposta correta"
            },
            {
                texto: "3 portas",
                afirmacao: "Resposta errada "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
