let texto = window.document.getElementById('texto')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let textoOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaAssunto() {
    let txtA = document.querySelector('#txtAssunto')

    if(assunto.value == "0") {
        txtA.innerHTML = 'Selecione uma opção!'
        txtA.style.color = 'yellow'
    } else {
        txtA.innerHTML = ' '
        AssuntoOk = true
    }
}

function validaEmail() {
    let txtE = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtE.innerHTML = "Digite um e-mail válido!"
        txtE.style.color = 'yellow'
    } else {
        txtE.innerHTML = " "
        emailOk = true
    } 
}

function validaTexto() {
    let txtT = document.querySelector('#txtTexto')

    if(texto.value.length >= 100) {
        txtT.innerHTML = 'Limite máximo permitido é de 100 caracteres!'
        txtT.style.color = 'yellow'
    } else {
        txtT.innerHTML = " "
        textoOk = true
    }
}

function enviar() {
    if(textoOk == true && emailOk == true && assuntoOk == true){
        alert ('Enviado com sucesso! Agradecemos pelo contato.')
    } else {
        alert ('Ops, preencha o formulário corretamente antes de enviar!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}