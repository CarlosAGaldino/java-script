var idade = 15
console.log(`Você tem ${idade} anos então o voto é :`)
if(idade < 16){
    console.log("não vota")
}else if(idade <18 || idade > 65){
        console.log("voto opicional")
    }else{
        console.log("voto obrigatório")
    
}