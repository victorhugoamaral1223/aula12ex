const botao = document.getElementById("botao")
botao.addEventListener("click", verificar)

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoInput = document.getElementById('txtano')
    let res = document.getElementById('res')

    //length ele retonar o numeros de caracteris dentro do input
    if (anoInput.value == 0 || Number(anoInput.value) >= ano) {
        alert('Ano invalido por favor verificar o ano!!')
        return
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(anoInput.value)
        let genero = ''
        // checked == Marcado ou checado
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        } else {
            alert('Escolha um genero')
        }

    }
}
