function soma (a,b) {
    if(a === undefined || b === undefined) {
        console.log("Essa função precisa dos dois argumentos")
    } else {
        return a+b;
    }
}

console.log(soma(1));
console.log(soma(1,3));
console.log();