function contar(){
    var inicio = window.document.getElementById("inicio")
    var final = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("res")

    if (inicio.value.length == 0 || final.value.length == 0 ||  passo.value.length == 0){
        alert("[ERROR]")
        res.innerHTML = "Impossível contar"
    }else {
        res.innerText = "Contando:"
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert ("Passo invalido")
            p=1
        }
        if( i < f){
            for(let c = i; c <= f; c += p){
                res.innerText += `${c} \u{2794} `
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerText += `${c} \u{2794} `
            }  
        }
       
        }
        res.innerHTML += `\u{1F3C1}` 
}
