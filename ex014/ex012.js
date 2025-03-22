window.addEventListener("load", carregar)
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agoara sao ${horas}:${minutos} horas`

    if (horas >= 8 && horas < 12) {
        img.src = 'img/manha.png'
    } else if (horas >= 12 && horas <= 18) {
        img.src = 'img/tarde.png'
    } else {
        img.src = 'img/noite.png'
    }
}