/*let i = 1;
while (i < 11) {
    console.log ("contando:" , (i * 5));
    i++;
    }*/

//for (let i = 1; i <= 10; i++){
//    console.log ("contando: " + i * 5)
//}
let multiplicacao = 0

for (let i = 1; i <= 10; i++) {
    if (i === 3) {dizerOla(i)};
    let retornoCalculadora = 0
    retornoCalculadora = calculadora (i, 5)  
    console.log (retornoCalculadora);
}

function dizerOla(numero) {
    multiplicacao = multiplicacao + 1
    console.log ("Olá! " + multiplicacao);
}

function calculadora(valorA, valorB) {
    //let multiplicacao = 0
    multiplicacao = (valorA * valorB)
    return multiplicacao
}

