function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert ("[ERRO] verificar o ano e tente novamente")
    }else{
        var fsex =document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"

        if (fsex[0].checked){
            genero ="homem"
            if(idade >= 0 && idade <= 10){
                img.setAttribute(`src`,`imagensp2/crianças.jpg`)
            }else if(idade >= 10 && idade <22){
                img.setAttribute(`src`,`imagensp2/adolescentehomem.jpg`)
            }else if(idade <50){
                img.setAttribute(`src`,`imagensp2/homemadulto.jpg`)

            }else{
                img.setAttribute(`src`,`imagensp2/velhos.jpg`)
            }

        }else if(fsex[1].checked){
            genero ="mulher"
            if(idade >= 0 && idade <= 10){
                img.setAttribute(`src`,`imagensp2/crianças.jpg`)
            }else if(idade <22){
                img.setAttribute(`src`,`imagensp2/adolescentemulher.jpg`)
            }else if(idade <50){
                img.setAttribute(`src`,`imagensp2/mulheradulta.jpg`)
            }else{
                img.setAttribute(`src`,`imagensp2/velhos.jpg`) 
            }
        }
        res.style.textAlign = "center"
        res.innerText =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}