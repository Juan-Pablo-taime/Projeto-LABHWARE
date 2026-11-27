const dificilDiv = document.querySelectorAll("#dificil");
const botaoInicial = document.getElementById("botaoInicio");
const main_text = document.getElementById("main_text");
const main = document.getElementById("main");
const parte_1 = document.getElementById("parte-1a");
const parte_2 = document.getElementById("parte-2");
const parte_3 = document.getElementById("parte-3");
// const coresTema = 
// const corTema = 

// Troca a fonte do "DIFÍCIL"
let fontName = 0;
const fonts = [
    'Courier New', 'monospace',
    'Comic Sans MS', 'tecnologico', 'Times New Roman', 'Helvetica', 'Impact'
];
function trocaFonte() {


    dificilDiv.forEach(e => {

        let lastFontName = fontName;
        do {
            fontName = Math.floor(Math.random() * fonts.length)
        } while (lastFontName === fontName);
        e.style.fontFamily = fonts[fontName];
        // console.log(fonts[fontName])
    });
}

if (main_text && main_text.className === "main-text") {
    setInterval(() => {
        if (main_text.className === "main-text")
            trocaFonte();
    }, 500);
}
// Animação inicial da escolha de cores


class TrocaFundo {
    constructor() {
        let clickedButton = false;
        var butlaranja = document.getElementById("butlaranja");
        var butvermelho = document.getElementById("butvermelho");
        var butverde = document.getElementById("butverde");
        var butbranco = document.getElementById("butbranco");
        var butciano = document.getElementById("butciano");

        butvermelho.addEventListener("mouseenter", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/vermelho.png')"
        });
        butverde.addEventListener("mouseenter", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/verde.png')"
        });
        butlaranja.addEventListener("mouseenter", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/laranja.png')"
        });
        butciano.addEventListener("mouseenter", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/ciano.png')"
        });

        butvermelho.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/vermelho.png')"
            clickedButton = true;
        });
        butverde.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/verde.png')"
            clickedButton = true;
        });
        butlaranja.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/laranja.png')"
            clickedButton = true;
        });
        butciano.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/ciano.png')"
            clickedButton = true;

        });
        butbranco.addEventListener("mouseenter", function () {
            document.body.style.backgroundImage = "url('./IMAGENS/branco.png')"
        });

        butvermelho.addEventListener("mouseleave", function () {
            if (clickedButton == false)
                document.body.style.backgroundImage = "url('./IMAGENS/preto.png')"
        });
        butverde.addEventListener("mouseleave", function () {
            if (clickedButton == false)
                document.body.style.backgroundImage = "url('./IMAGENS/preto.png')"
        });
        butlaranja.addEventListener("mouseleave", function () {
            if (clickedButton == false)
                document.body.style.backgroundImage = "url('./IMAGENS/preto.png')"
        });
        butciano.addEventListener("mouseleave", function () {
            if (clickedButton == false)
                document.body.style.backgroundImage = "url('./IMAGENS/preto.png')"
        });
        butbranco.addEventListener("mouseleave", function () {
            if (clickedButton == false)
                document.body.style.backgroundImage = "url('./IMAGENS/preto.png')"
        });

        const menuMontador = new MenuMontador();
    }
}

class MenuMontador {
    constructor() {
        const butcores = document.querySelectorAll(".butcores")
        butcores.forEach(element => {
            element.addEventListener("click", function () {
                main.className = "MenuMontador";
                main_text.className = "MenuMontador";
                parte_2.hidden = true;
                parte_3.hidden = false;
                // Lógica para os cliques de cada botão de peça individual.
            });
        });
    }
}

botaoInicial.addEventListener("click", function () {
    main_text.className = "colors-theme-text";
    main.className = "colors-theme-text";
    // main_text.innerHTML = ``
    botaoInicial.hidden = true;
    parte_1.hidden = true;
    parte_2.hidden = false;
    botaoInicial.remove()
    const trocaFundo = new TrocaFundo();
});




