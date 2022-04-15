var agora = new Date()
var diaSem = agora. getDay()
/*
0-dom
1-seg
2-ter
3-quart
4-quint
5-sexta
6-sab
*/
switch(diaSem){
    case 0:
        console.log("Domingo")
        break 
        //NÃO ESQUECER DO break SE NÃO TODOS OS COMANDOS SERÃO FEITOS TUDO EM ORDEM, ATÉ ENCONTRAR UM BREAK.
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("[ERROR] Dia invalido")
        break
}
