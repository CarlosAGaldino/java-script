function tabuada(){
    let numero = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    let res = document.querySelector ("res")

    //validação
    if(numero.value.length == 0) {
        alert(`[ERROR]`) //erro caso não digitarmos valor
    } else { //caso tenha um valor
        let n =Number(numero.value) 
        let c = 1
        tab.innerHTML = ``
        while(c <= 10){
            let item = document.createElement ("option") 
            //criando elemento dentro do js
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}` 
            //dando valor dentro do js

            tab.appendChild(item) // para fazer aparecer itens pelo js
            c++
        }    
         
    }
}