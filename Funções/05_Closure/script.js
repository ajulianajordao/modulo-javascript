function contador (i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
return somarContador;
}

let meuContador = contador (5);

//Chama a função meu contador, que é a função somarContador retornada pela função contador

meuContador();
meuContador();

/* Uma closure basicamente é criar uma função dentro de outra função
que possa utilizar a variável da função pai mesmo depois que o valor é retornado*/ 


