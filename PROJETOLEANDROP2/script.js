const dificilDiv = document.querySelectorAll("#dificil");
const botaoInicial = document.getElementById("botaoInicio");
const main_text = document.getElementById("main_text");
const main = document.getElementById("main");
// const coresTema = 
// const corTema = 



// Troca a fonte do "DIFÍCIL"
let fontName = 0;
const fonts = [
'Courier New', 'monospace',
'Comic Sans MS', 'tecnologico', 'Times New Roman', 'Helvetica', 'Impact'
];
function trocaFonte(){

    
    dificilDiv.forEach(e =>{
            
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

botaoInicial.addEventListener("click", function(){
    main_text.className = "colors-theme-text";
    main.className = "colors-theme-text";
    main_text.innerHTML = `<h2> escolha sua cor </h2> <br>
            <div id="coresmenu">
                <input type="button" class="butcores" id="butbranco">
                <input type="button" class="butcores" id="butvermelho">
                <input type="button" class="butcores" id="butlaranja">
                <input type="button" class="butcores" id="butverde">
                <input type="button" class="butcores" id="butciano">
            </div>`
    botaoInicial.remove()
    document.getElementById("butbranco").addEventListener("click", function(){
        document.body.style.backgroundImage = "url('./IMAGENS/verde.png')"
        
    });

});


    





