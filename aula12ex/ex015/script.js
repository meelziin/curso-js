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
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Masculino"

            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/crianca-m.png")
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute("src", "imagens/jovem-m.png")
            } else if (idade >= 18 && idade < 50) {
                img.setAttribute("src", "imagens/adulto-m.png")
            } else /* if (idade >= 50 && idade < 90) */ {
                img.setAttribute("src", "imagens/idoso-m.png")
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"

            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/crianca-f.png")
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute("src", "imagens/jovem-f.png")
            } else if (idade >= 18 && idade < 50) {
                img.setAttribute("src", "imagens/adulto-f.png")
            } else /* if (idade >= 50 && idade < 90) */ {
                img.setAttribute("src", "imagens/idoso-f.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Possui gênero ${genero} e tem ${idade} anos.`
        res.appendChild(img) // vai adicionar ESSE elemento depois...
    }
}