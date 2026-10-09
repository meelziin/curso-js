/*
3 Formas simples de fazer 

* basico
    console.log("Passo 1 de 6")
    console.log("Passo 2 de 6")
    console.log("Passo 3 de 6")
    console.log("Passo 4 de 6")
    console.log("Passo 5 de 6")
    console.log("Passo 6 de 6")

* Repetição com teste logico no começo    
    while(c <= 6) {
        console.log(`Passo ${c} de 6`)
        c++ // c = c + 1
    }

* Repetição com teste logico no final  
    do {
        console.log(`Passo ${c} de 6`)
        c++
    } while (c <= 6)
*/

var c = 1
do {
    console.log(`Passo ${c} de 6`)
    c++
} while (c <= 6)
