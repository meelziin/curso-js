function cal() {
    var num = document.getElementById("num").value
    var vezes = 1
    var tab = document.getElementById("tab")
    tab.innerHTML = ""
    
    if (num === "") {
        window.alert("Digite um número")
    } else {
        num = Number(num)
        for (;vezes <= 10; vezes ++) {
                var res = num * vezes
                tab.innerHTML += `${num} x ${vezes} = ${res} <br>`
        }
    }       
}