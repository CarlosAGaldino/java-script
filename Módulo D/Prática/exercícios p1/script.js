function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "imagensp1/Amanhecer.jpg"
        document.body.style.background = "#3FC0C5"
    }else if( hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src ="imagensp1/tarde.jpg"
        document.body.style.background = "#FF8847"
    }else{
        //BOA NOITE
        img.src = "imagensp1/noite.jpg"
        document.body.style.background = "#233742"
    }
}