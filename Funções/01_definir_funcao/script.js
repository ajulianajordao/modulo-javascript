// funcao sem parametro

function imprimirNoConsole () {
    console.log("imprimir na tela");
}

imprimirNoConsole();

// função com parametro

function imprimirNumero (num) {
    console.log("O número é " + num);
}

imprimirNumero(2);

// pode chamar a função varias vezes e imprimir vários numeros

imprimirNumero(10);
imprimirNumero(12);
imprimirNumero(18);
imprimirNumero(16);

// função anonima atrelada a uma variável

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

