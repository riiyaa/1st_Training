// Bubble Sort 

A = [7,3,1,9,2]

for(j=0 ; j<A.length ; j++){

    for(i=0 ; i<A.length-1 ; i++){
        if(A[i] > A[i+1]){

            var temp = A[i] ;
            A[i] = A[i+1];
            A[i+1] = temp
        }
        
    }
}
console.log(A)