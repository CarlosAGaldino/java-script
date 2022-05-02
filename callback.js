function exibir(num){
    console.log(`A operação resultou em : ${num}`);
}


function soma (a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb){
    var op = a * b; 
    cb(op);
}

soma (2, 2, exibir);

multiplicacao(2, 8, exibir);

function greeting(name) {
    alert('Olá ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
  }
  
  processUserInput(greeting);

  //Função assincrona

function primeiraFuncao(){

    return new Promise((resolve) =>{

        setTimeout() =>{
          console.log(`Esperou isso aqui`);
          resolve();
        
        }, 1000)
    }
}

async function segundaFuncao(){
    console.log(`Iniciou`)

    await primeiraFuncao()
    console.log("terminou")
}

segundaFuncao()
  