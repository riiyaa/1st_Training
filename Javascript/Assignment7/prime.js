
//Prime eith recursion

function prime(x,y){
    if(y>=Math.sqrt(x)){
        return "prime"
    }
    if (x%y==0){
        return "not prime"
    }
    y+=1
    return prime(x,y)
}

console.log(prime(1,2));