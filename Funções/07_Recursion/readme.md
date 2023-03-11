Em termos gerais, a recursão pode ser considerada como um processo de repetição de uma rotina. Portanto, de maneira bem simplista, pode ser definida como uma rotina (procedimento ou função) que chama a si mesma, de forma direta ou indireta.

Imagine que você tem uma tarefa grande para realizar, mas essa tarefa pode ser dividida em várias tarefas menores. Por exemplo, imagine que você precisa limpar toda a sua casa, mas pode começar dividindo as tarefas por cômodo: primeiro limpar o quarto, depois a cozinha, o banheiro, a sala, etc.

Agora imagine que cada um desses cômodos pode ser dividido em tarefas ainda menores. Por exemplo, para limpar o quarto, você precisa arrumar a cama, limpar o chão, tirar o pó dos móveis, etc.

A recursão funciona de maneira parecida: quando uma função é chamada, ela pode ser dividida em subfunções menores, que também podem ser divididas em subfunções ainda menores, e assim por diante, até que se chegue a uma subfunção que possa ser resolvida de forma direta, sem chamar mais nenhuma outra função. Essa subfunção é chamada de caso base.

Cada uma dessas subfunções vai sendo chamada e resolvida de forma individual, até que se chegue ao caso base. Quando isso acontece, cada uma das subfunções é resolvida e o resultado é combinado para obter o resultado da função original.

É como se você fosse limpando cada cômodo da casa, um por um, e depois combinasse o resultado de cada um para ter a casa toda limpa. A recursão é uma forma de resolver problemas complexos dividindo-os em partes menores e mais simples.




Juliana Jordão
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


Essa função chamada recursion recebe um número como parâmetro. Ela começa verificando se esse número menos 1 é menor que 2. Isso é como se estivéssemos perguntando: "Esse número é tão pequeno que já chegamos no final do problema?" Se sim, a função para e imprime "Recursão parou" seguido desse número.

Se o número não é tão pequeno assim, a função faz mais duas verificações. Primeiro, ela verifica se o número é ímpar. É como se perguntássemos: "Esse número é estranho e diferente, como 1, 3, 5, 7, etc?" Se sim, a função imprime "O número é impar" seguido desse número e então chama a si mesma com o parâmetro sendo o número menos 1. Isso é como se estivéssemos dizendo: "OK, esse número é ímpar, mas eu ainda preciso resolver o problema para o número anterior, que é par. Então vamos chamar a função de novo com o número anterior".

Se o número não é ímpar, a função faz outra verificação, para ver se ele é par. É como se perguntássemos: "Esse número é normal e comum, como 2, 4, 6, 8, etc?" Se sim, a função imprime "Número par" seguido desse número e então chama a si mesma com o parâmetro sendo o número menos 2. Isso é como se estivéssemos dizendo: "OK, esse número é par, então eu posso resolver o problema para o número anterior, que também é par. Então vamos chamar a função de novo com o número anterior ao anterior".

Essa lógica continua se repetindo até que se chegue a um número tão pequeno que a função pare e imprima "Recursão parou" seguido desse número. É como se estivéssemos resolvendo um quebra-cabeça, peça por peça, até que ele esteja completamente resolvido.

nesse caso, o que significa a recursão?  o processo de subdividir as tarefas ?
Sim, exatamente! A recursão é um processo que consiste em subdividir uma tarefa em tarefas menores e, em seguida, resolver cada tarefa menor chamando a função recursivamente. A ideia é que, ao repetir esse processo várias vezes, a tarefa original seja resolvida.

No caso do código que você mostrou anteriormente, a tarefa que está sendo subdividida é encontrar se um número é par ou ímpar. A função recursion verifica o número passado como parâmetro, e dependendo se ele é par ou ímpar, ela chama a si mesma passando como parâmetro um número menor em 1 (se o número for ímpar) ou 2 (se o número for par).

Esse processo de subdividir a tarefa de verificar se um número é par ou ímpar em tarefas menores é repetido até que a função alcance um número tão pequeno que possa ser resolvido diretamente, sem precisar chamar a si mesma novamente. Quando isso acontece, a função imprime "Recursão parou" seguido do número.

Em resumo, a recursão é uma técnica que permite que uma função resolva um problema chamando a si mesma várias vezes, resolvendo cada vez um problema menor, até que seja possível resolver diretamente um problema tão pequeno que não precise ser subdividido em tarefas menores.