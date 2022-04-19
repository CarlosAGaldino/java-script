var num = []
var digitado = document.getElementById(`txtn`)
var tab = document.getElementById (`seltab`)
var res = document.querySelector ("div#res")
//alert(num.length)


function adicionar(){
    if(digitado.value == 0 || digitado.value > 100){
        alert(`[ERROR]`)
        digitado.value=` `
    }else{
        let n = Number(digitado.value)
        num.push(n)

        let item = document.createElement("option")
        item.innerHTML = `O número adicionado fo ${n}`
        item.value = `tab${n}`
        tab.appendChild(item)
        digitado.value = ``
        res.innerHTML = " "
    }
}
function finalizar(){
    if(num.length == 0){
        alert(`[ERROR]`)
    }else{
        num.sort()

        function soma(){
            let soma = 0

            for(let c = 0; c < num.length; c++){
                soma += num[c]
            }
            return soma
        }

        let info1 = document.createElement(`p`)
        info1.innerHTML =`Ao todo, temos ${num.length} números cadastrados`
        res.appendChild(info1)

        
        let info2 = document.createElement(`p`)
        info2.innerText =`O maior numéro informado é ${num[num.length-1]}`
        res.appendChild(info2)

        let info3 = document.createElement(`p`)
        info3.innerText =`O menor numéro informado é ${num[0]}`
        res.appendChild(info3)

        let info4 = document.createElement(`p`)
        info4.innerText =`Somando os valores temos ${soma()}`
        res.appendChild(info4)

        let info5 = document.createElement(`p`)
        info5.innerText =`A média dos valores é ${soma()/num.length}`
        res.appendChild(info5)
    }
    
}

