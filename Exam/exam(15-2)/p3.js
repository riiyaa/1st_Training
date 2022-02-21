//Find the largest pair sum in an unsorted array(Given an unsorted of distinct integers, find the largest pair sum in it. For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.)

arr = [12, 34, 10, 6, 40];

let max1 = 0, max2 =0;
x=0;
for(i=0 ; i<arr.length; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[j]>max1){
            max1 = arr[j];
            x = j;
        }
        
    }
    
}
arr.splice(x , 1);
for(i=0 ; i<arr.length; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[j]>max2){
            max2 = arr[j];
            y = j;
        }
        
    }
    
}
console.log(max1+max2)