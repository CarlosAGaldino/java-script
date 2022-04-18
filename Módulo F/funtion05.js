function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

//função recursiva quando ela se chama várias vezes.
console.log(fatorial(5))