// A recursão em JavaScript é uma técnica que permite que uma função chame a si mesma até que um resultado seja obtido

/* estamos testando três condições diferentes usando 
a estrutura if, else if e else. Se a primeira condição 
não for atendida, o bloco de código dentro do else if é testado. 
Se a segunda condição também não for atendida, o bloco de código 
dentro do else é executado. */

function recursion (n) {
    if(n - 1 < 2) { // verifica se o resultado da subtração de "n" por 1 é menor que 2.
        console.log("Recursão parou" + n );
    } else if (n % 2 != 0) { // verifica se o resto da divisão de "n" por 2 é diferente de 0
        console.log("O número é impar" + n );
        recursion(n - 1);
    } else {
        console.log("Número par" + n );
        recursion(n - 2);
    }
  
}

recursion(39);
recursion(20);
