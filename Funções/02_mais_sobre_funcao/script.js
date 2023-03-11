// retornar um valor

const soma = function(a,b) {
    return a + b;
}

console.log(soma(3,5));

// funcao para multiplicar tres numeros

function multiplicarTresNumeros (x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

// ou pode definir uma função a uma variável

const mult = multiplicarTresNumeros(3,5,6);
console.log("O numero da multiplicação é " + mult);

// função para saber se pode dirigir

function idadeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não pode dirigir!");
    }    

}

console.log(idadeDirigir(19,true));
console.log(idadeDirigir(25,true));
console.log(idadeDirigir(17,true));
console.log(idadeDirigir(25,false));
