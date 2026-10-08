function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ""
        if (fsex[0].checked) {
            genero = "Masculino"
        } else {
            genero = "Feminino"
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos que seu gênero é ${genero} e tem ${idade} anos.`
    }
}