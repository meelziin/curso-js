function add(){
    let num = Number(document.getElementById("num").value)
    let mostrar = document.getElementById("tab")
    let res = document.getElementById("res")
    //mostrar.innerHTML = ""

    if (num >= 1 && num <= 100) {
        let item = document.createElement("option")
        mostrar.appendChild(item)
        item.textContent = num
        //mostrar.innerHTML = `valor ${num} adicionado`
    } else {
        window.alert("Número INVALIDO!")
    }
}   