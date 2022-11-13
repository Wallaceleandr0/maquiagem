function abrir() {
    let paragrafo = document.getElementById("conteudo")
    
    console.log(paragrafo)
    
    if(paragrafo.style.display == "none") {
        
        paragrafo.style.display = "block"
    } else {
        paragrafo.style.display = "none"
    }
    
}