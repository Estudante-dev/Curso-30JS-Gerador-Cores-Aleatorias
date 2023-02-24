function gerarCor() {
    return Math.round(Math.random() * 255);
}


function mudarCor(){
    let corRgb = `rgb(${gerarCor()} , ${gerarCor()} , ${gerarCor()})`;
    document.body.style.backgroundColor = corRgb;
};


//Curso #30ProjetosJavaScript da Estudante.dev
