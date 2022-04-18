let num =[5, 8, 2, 9];

num[4]= 4 
// cria um novo espaço caso não exista ou substitui um valor de uma posição já existente.

num.push(7);
//cria um novo elemento sem saber qual é o última posição de um array.

num.length
//para saber o tamanho do nosso vetor(quanttidade de casas ou elementos).

//num.sort() //método interno
// reorganiza todos os elemento de forma crescente (ex : 2, 5, 8, 9).

/*
console.log(`nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições`)
console.log(`Reorganizando nosso vetor: ${num.sort()}`)

*/

/*
for (c = 0; c < num.length; c++){
    console.log(` O vetor na posição ${c} é : ${num[c]}`)
}
*/
/*
for(let c in num ){
    console.log(` O vetor na posição ${c} é : ${num[c]}`)
}

//para cada posição em num faça, forma de leitura, de um for simplificado.
*/
num.indexOf(5)
//num.indexOf(7)
//para buscarmos um valor dentro de um array