var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style ="display:flex; margin-top:65px;"
    setadireita.style ="display:none"

}
function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setadireita.style ="display:flex margin-top:65px;"
    setaesquerda.style ="display:none;"
}