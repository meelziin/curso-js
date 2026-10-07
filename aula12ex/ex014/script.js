function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha-2.png"
        document.body.style.background = "#F1D5AD"
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = "imagens/tarde-2.png"
        document.body.style.background = "#ec7e42"
    } else {
        img.src = "imagens/noite-2.png"
        document.body.style.background = "#0F1644"
    }
}
