let dificilDiv = document.querySelectorAll("#dificil")
let fonts = [
'Courier New', 'monospace',
'Comic Sans MS', 'tecnologico', 'Times New Roman', 'Helvetica', 'Impact'
];

fontName = 0;
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