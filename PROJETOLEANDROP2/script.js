const dificilDiv = document.querySelectorAll("#dificil");
const botaoInicial = document.getElementById("botaoInicio");
const main_text = document.getElementById("main_text");
const main = document.getElementById("main");
// const coresTema = 
// const corTema = 



// Troca a fonte do "DIFÍCIL"
fontName = 0;
const fonts = [
'Courier New', 'monospace',
'Comic Sans MS', 'tecnologico', 'Times New Roman', 'Helvetica', 'Impact'
];
function trocaFonte(){

    
    dificilDiv.forEach(e =>{
            
            let LastFontName = fontName;
            do {
                fontName = Math.floor(Math.random() * fonts.length)
            } while (LastFontName === fontName);
            e.style.fontFamily = fonts[fontName];
            // console.log(fonts[fontName])
        });
}

setInterval(() => {
    trocaFonte();
}, 500);

// Animação inicial da escolha de cores

botaoInicial.addEventListener("click", function(){
    main_text.className = "colors-theme-text";
    main.className = "colors-theme-text";
});