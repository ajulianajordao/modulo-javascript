// incrementa uma unidade ou mais, de acordo com o valor escolhido e retorna o valor da expressao pra variavel

let numero = 5;

while(numero < 50) {
    numero = numero + 1;
    console.log(numero);
}

// incrementa uma unidade 
// let num = 0: declara a variável num e a inicializa com o valor 0.
// num < 50: é a condição que precisa ser atendida para que o loop continue sendo executado. Enquanto num for menor que 50, o loop continuará a ser executado.
//num++: é o incremento que é executado a cada iteração do loop. Aqui, o valor de num é aumentado em 1.
//console.log(num): exibe o valor atual de num no console do navegador ou terminal.
//Dessa forma, o loop for executa 50 vezes, imprimindo no console os números de 0 a 49.

for (let num = 0 ; num < 50 ; num++ ) {
    console.log(num);
}

// diminui uma unidade 

for (let i = 1 ; i < 10 ; i--) {
    console.log(i);
    break;
}