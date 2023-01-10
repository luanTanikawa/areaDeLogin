let inputs = document.querySelectorAll('label input')
let campoText = document.querySelectorAll('.campo-text')
let senha = document.querySelector('.box-senha')
let campoSenha = document.querySelector('.box-senha input')
let campoTextSenha = document.querySelector('.box-senha label div')

function clicou () {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error')    
        if (campoText[i].children.length == 2) {
            campoText[i].querySelector('.text-error').remove()
        }
        switch (inputs[i].getAttribute('data-rule')) {
            case 'required':
                if (inputs[i].value == '') {
                    inputs[i].classList.add('error')
                    campoText[i].innerHTML += '<div class="text-error">Esse campo é obrigatório</div>'
                }
            break
        }
    }   
}     

function esqueciSenha () {
    senha.style.display = 'block'
}

function enviarSenha () {
    campoSenha.classList.remove('error')
    if (campoTextSenha.children.length == 2) {
            campoTextSenha.querySelector('.text-error').remove()
        }

    if (campoSenha.value == '') {
        campoSenha.classList.add('error')
        campoTextSenha.innerHTML += '<div class="text-error">O campo de email está vazio</div>'
    }
}