var agora = new Date()
var hora = agora.getHours() // para pegar o horário do sistema 
/*ficar de olho com a hora que for pega, pois se for de um servidor
será a do servidor o mesmo acontece com o cliente*/

console.log(`Agora são exatamente ${hora} horas`)

if(hora <12){
    console.log("Bom dia")

}else if (hora <= 18) {
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}
