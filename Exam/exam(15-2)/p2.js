//Find the repeating and the missing (with O(nxn) complexity, best solution is O(n))

arr = [4, 3, 6, 2, 1, 1];
let missing , repeat;
let min = arr[0];
let max =arr[0];

for(i=0 ; i<arr.length ; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[j]<min){
            min = arr[j]
        }
        if(arr[j]>max){
            max = arr[j]
        }
        if(arr[i]==arr[j]){
            repeat = arr[i]
        }
        
        
    }
}
for(k=min ; k<max ; k++){
    if(arr.includes(min)){
        min+=1
    }
    else{
        missing = min
    }
}


console.log(min,max);
console.log("Repeat"+":"+repeat+","+"Missing"+":"+missing);