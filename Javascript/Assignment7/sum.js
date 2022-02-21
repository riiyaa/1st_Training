A = [1,2,3,4,5,6,7]
sum = 0;

function loop (index=0){
    if(index == A.length){
        return null
    }
    sum += A[index]
    
    index+=1
    loop(index)
}
loop()
console.log(sum);