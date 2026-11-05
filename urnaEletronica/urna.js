// tela ==================

let infoCandidato = document.querySelector('#infoCandidato')
let imagemCandidato = document.querySelector('#imagemCandidato')
let numDigitado = document.querySelector('#numDigitado')


// botoes ==================

const botaoNumero = document.querySelector('#botaoNumero')
const botaoEscolha = document.querySelector('#botaoEscolha')
let votoUsuario = ""

botaoNumero.addEventListener("click", (event) => {
    const botao = event.target.closest("button")

    if (botao === null) {
        return
    }
       
    const limite = 2
    
    if (votoUsuario <= limite) {
        votoUsuario += botao.value   
    } else {
        return
    }
    
    console.log(botao.value)
    numDigitado.textContent = votoUsuario

})




