
//Factorial with recursion

y=""
function fact(x){
    if(x==0){
        return 1
    }
    y=x*fact(x-1)
    return y
    
}
console.log(fact(3));