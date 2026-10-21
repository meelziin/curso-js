function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""

        while (c <= 10) {
            let item = document.createElement("option") // para criar o elemento "option" de forma dinâmica
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // muda o valor dentro do "tab" para 1, 2, 3...
            tab.appendChild(item)  // adicionar um elemento "filho"
            c++
        }
    }
}