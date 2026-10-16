function contar() {
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)
    var mostrar = document.getElementById("cont")
    mostrar.innerHTML = ""

    if (passo <= 0) {
        window.alert("[INVÁLIDO]Digite um valor maior que ZERO")
    } else {
        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo){
            mostrar.innerHTML += `${inicio} `
            }
        } else {
            for (inicio; inicio >= fim; inicio -= passo){
            mostrar.innerHTML += `${inicio} `
            }
        } 
    }     
} 