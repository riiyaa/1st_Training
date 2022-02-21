A = ["c","f","z","m","a","A","C"]
temp = ""

function swap(A,x,y){
    temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
for(i=0 ; i<A.length ; i++){
    min = i;
    
    for(j=i+1 ; j<A.length ; j++){

        if(A[min]>A[j]){
            min = j   
        }
        
    }
    swap(A,min,i)
    
}
console.log(A);