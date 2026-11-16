"use strict" // Aplicar regras mais rigorosas de análise e tratamento de erros

const preencherFormulario = (endereco) => {
    document.getElementById("endereco").value = endereco.logradouro
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("cidade").value = endereco.localidade
    document.getElementById("estado").value = endereco.uf
}

const pesquisarCep = async() => {
    const cep = document.getElementById("cep").value
    const url = `http://viacep.com.br/ws/${cep}/json/` // http ou http
    const dados = await fetch(url)
    const endereco = await dados.json()
    preencherFormulario(endereco)
    //fetch(url).then(responde => responde.json()).then(console.log)
}

document.getElementById("cep").addEventListener("focusout", pesquisarCep)